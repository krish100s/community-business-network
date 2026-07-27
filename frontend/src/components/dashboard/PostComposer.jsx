import { DashboardCard } from './DashboardCard.jsx'
import { UploadZone } from './UploadZone.jsx'

export function PostComposer() {
  return (
    <DashboardCard>
      <span className="gcb-overline">Create Post</span>
      <div className="gcb-dashboard-composer">
        <label className="gcb-dashboard-field">
          <span>Title</span>
          <input type="text" placeholder="Share something with your community" />
        </label>
        <label className="gcb-dashboard-field">
          <span>Description</span>
          <textarea rows="5" placeholder="Write a meaningful update..." />
        </label>
        <UploadZone />
      </div>
    </DashboardCard>
  )
}

