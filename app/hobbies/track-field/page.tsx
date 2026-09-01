import BackLink from '../../components/ui/BackLink'

const photos = [
  { src: '/images/hobbies/shot.jpeg', alt: 'Shot put competition' },
  { src: '/images/hobbies/young_shot.jpeg', alt: '2016 — one of my first recorded shot put throws' },
  { src: '/images/hobbies/track_team.jpeg', alt: 'CMS Track & Field throws team' },
  { src: '/images/hobbies/track_meet_hug.jpg', alt: 'At a track meet with my partner' },
]

const videos = [
  { file: 'track1.MOV', caption: 'Hammer throw' },
  { file: 'track2.MOV', caption: 'Hammer throw' },
  { file: 'track3.MOV', caption: 'Hammer throw' },
  { file: 'track4.MOV', caption: 'Hammer throw' },
]

export default function TrackFieldPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies">Back to Hobbies</BackLink>

      <p className="eyebrow mb-4">A Decade in Track & Field</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Sports & Athletics</h1>
      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-copper">
        <span className="h-1.5 w-1.5 rounded-full bg-copper" />
        Page in progress — more photos and videos coming soon
      </p>

      <h2 className="mt-12 font-display text-2xl font-semibold text-ink">Photos</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.src} className="overflow-hidden rounded-lg border border-line">
            <img src={photo.src} alt={photo.alt} className="aspect-square w-full object-cover" />
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Videos</h2>
      <div className="mt-6 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/fl1rQWMDuas"
            title="Track & Field highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="p-3 text-sm text-body">Track highlights</p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {videos.map((video, i) => (
          <div key={video.file} className="overflow-hidden rounded-lg border border-line bg-surface">
            <video src={`/videos/track-field/${video.file}`} controls className="w-full bg-black" />
            <p className="p-3 text-sm text-body">
              Video {i + 1} — {video.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
