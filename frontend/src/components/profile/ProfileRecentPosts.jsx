const posts = [
  'Shared a new community story about local growth.',
  'Published a premium UI update for the businesses page.',
  'Posted a short update about design system consistency.',
]

export function ProfileRecentPosts() {
  return (
    <section className="gcb-profile-card">
      <span className="gcb-overline">Recent Posts</span>
      <div className="gcb-profile-list">
        {posts.map((post) => (
          <div key={post} className="gcb-profile-list__item">
            {post}
          </div>
        ))}
      </div>
    </section>
  )
}

