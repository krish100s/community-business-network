const stats = [
  { label: 'Businesses owned', value: '12' },
  { label: 'Posts published', value: '84' },
  { label: 'Followers', value: '2.4K' },
  { label: 'Communities joined', value: '19' },
]

export function ProfileStats() {
  return (
    <section className="gcb-profile-grid gcb-profile-grid--stats">
      {stats.map((stat) => (
        <article key={stat.label} className="gcb-profile-card gcb-profile-stat">
          <span className="gcb-overline">{stat.label}</span>
          <strong>{stat.value}</strong>
        </article>
      ))}
    </section>
  )
}

