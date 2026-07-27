import { DashboardCard } from './DashboardCard.jsx'

export function BusinessStats({ items }) {
  return (
    <div className="gcb-dashboard-stats">
      {items.map((item) => (
        <DashboardCard key={item.label}>
          <span className="gcb-overline">{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.helper}</p>
        </DashboardCard>
      ))}
    </div>
  )
}

