const activities = [
  { title: 'Profile updated', desc: 'Updated cover image and profile summary.', time: 'Today' },
  { title: 'New post published', desc: 'Shared a community update with followers.', time: 'Yesterday' },
  { title: 'Business liked', desc: 'Saved Amber & Oak Coffee House.', time: '2 days ago' },
]

export function ProfileActivity() {
  return (
    <section className="gcb-profile-card">
      <span className="gcb-overline">Recent Activity</span>
      <div className="gcb-profile-activity">
        {activities.map((item) => (
          <article key={item.title} className="gcb-profile-activity__item">
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <span>{item.time}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

