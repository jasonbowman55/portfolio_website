import { NextRequest, NextResponse } from 'next/server'

interface PreviewData {
  title: string
  description: string | null
  image: string | null
  domain: string
  unavailable?: boolean
}

// In-memory cache — fine for a small personal site, resets on server restart.
const cache = new Map<string, { data: PreviewData; expires: number }>()
const TTL_MS = 1000 * 60 * 60 * 6 // 6 hours

function pick(html: string, re: RegExp) {
  return html.match(re)?.[1]?.trim()
}

function decodeEntities(str: string) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) {
    return NextResponse.json({ error: 'missing url' }, { status: 400 })
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return NextResponse.json({ error: 'invalid url' }, { status: 400 })
  }
  const domain = parsed.hostname.replace(/^www\./, '')

  const cached = cache.get(url)
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(cached.data)
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; JasonBowmanPortfolioBot/1.0; +https://jasonbowman.dev)',
        Accept: 'text/html',
      },
      signal: controller.signal,
      redirect: 'follow',
    })
    clearTimeout(timeout)
    if (!res.ok) throw new Error(`status ${res.status}`)

    const html = await res.text()

    const ogTitle = pick(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)
    const plainTitle = pick(html, /<title[^>]*>([^<]+)<\/title>/i)
    const ogDescription = pick(
      html,
      /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i
    )
    const metaDescription = pick(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
    )
    let ogImage: string | undefined = pick(
      html,
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
    )

    if (ogImage && !ogImage.startsWith('http')) {
      try {
        ogImage = new URL(ogImage, url).toString()
      } catch {
        ogImage = undefined
      }
    }

    const data: PreviewData = {
      title: decodeEntities(ogTitle || plainTitle || domain),
      description: decodeEntities(ogDescription || metaDescription || '') || null,
      image: ogImage || null,
      domain,
    }
    cache.set(url, { data, expires: Date.now() + TTL_MS })
    return NextResponse.json(data)
  } catch {
    const data: PreviewData = {
      title: domain,
      description: null,
      image: null,
      domain,
      unavailable: true,
    }
    // cache the miss too, briefly, so a broken link doesn't get hammered
    cache.set(url, { data, expires: Date.now() + 1000 * 60 * 10 })
    return NextResponse.json(data)
  }
}
