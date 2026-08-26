'use client'

import { useRef, useState } from 'react'

interface PreviewData {
  title: string
  description: string | null
  image: string | null
  domain: string
  unavailable?: boolean
}

// module-level cache so the same link doesn't get re-fetched every hover
const cache = new Map<string, PreviewData>()

export default function LinkPreview({
  href,
  children,
  className,
}: {
  href?: string
  children?: React.ReactNode
  className?: string
}) {
  const [data, setData] = useState<PreviewData | null>(null)
  const [show, setShow] = useState(false)
  const [side, setSide] = useState<'left' | 'right'>('left')
  const showTimer = useRef<ReturnType<typeof setTimeout>>()
  const hideTimer = useRef<ReturnType<typeof setTimeout>>()
  const wrapperRef = useRef<HTMLSpanElement>(null)

  // Only external http(s) links get a preview — internal, mailto, tel, etc.
  // just render as a normal link.
  const isExternal = !!href && /^https?:\/\//.test(href) && !href.includes('localhost')

  if (!isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  const load = () => {
    if (cache.has(href)) {
      setData(cache.get(href)!)
      return
    }
    fetch(`/api/link-preview?url=${encodeURIComponent(href)}`)
      .then((r) => r.json())
      .then((d: PreviewData) => {
        cache.set(href, d)
        setData(d)
      })
      .catch(() => {})
  }

  const handleEnter = () => {
    clearTimeout(hideTimer.current)
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (rect) setSide(rect.left > window.innerWidth / 2 ? 'right' : 'left')
    showTimer.current = setTimeout(() => {
      load()
      setShow(true)
    }, 250)
  }

  const handleLeave = () => {
    clearTimeout(showTimer.current)
    hideTimer.current = setTimeout(() => setShow(false), 150)
  }

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>

      {show && (
        <span
          className={`absolute top-full z-50 mt-2 block w-72 overflow-hidden rounded-lg border border-line bg-surface text-left shadow-xl ${
            side === 'right' ? 'right-0' : 'left-0'
          }`}
          onMouseEnter={() => clearTimeout(hideTimer.current)}
          onMouseLeave={handleLeave}
        >
          {!data ? (
            <span className="block p-3 text-xs text-muted">Loading preview…</span>
          ) : (
            <>
              {data.image && (
                <span className="block h-32 w-full bg-raised">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.image} alt="" className="h-full w-full object-cover" />
                </span>
              )}
              <span className="block p-3">
                <span className="mb-1 flex items-center gap-1.5 text-[0.68rem] text-muted">
                  <img
                    src={`https://www.google.com/s2/favicons?sz=32&domain=${data.domain}`}
                    alt=""
                    className="h-3 w-3"
                  />
                  {data.domain}
                </span>
                <span className="line-clamp-2 block text-sm font-medium text-ink">
                  {data.title}
                </span>
                {data.description && (
                  <span className="mt-1 line-clamp-2 block text-xs text-body">
                    {data.description}
                  </span>
                )}
                {data.unavailable && (
                  <span className="mt-1 block text-[0.68rem] italic text-muted">
                    No preview available for this link
                  </span>
                )}
              </span>
            </>
          )}
        </span>
      )}
    </span>
  )
}
