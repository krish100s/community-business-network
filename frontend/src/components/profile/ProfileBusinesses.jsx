const businesses = ['Amber & Oak Coffee House', 'Marigold Hair Studio', 'Linden Lane Boutique']

export function ProfileBusinesses() {
  return (
    <section className="gcb-profile-card">
      <span className="gcb-overline">Businesses Owned</span>
      <div className="gcb-profile-list">
        {businesses.map((business) => (
          <div key={business} className="gcb-profile-list__item">
            {business}
          </div>
        ))}
      </div>
    </section>
  )
}

