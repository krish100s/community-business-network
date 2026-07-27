export function PostsLoadingState() {
  return (
    <div className="gcb-post-grid">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="gcb-post-skeleton">
          <div className="gcb-post-skeleton__head" />
          <div className="gcb-post-skeleton__image" />
          <div className="gcb-post-skeleton__line" />
          <div className="gcb-post-skeleton__line gcb-post-skeleton__line--short" />
        </div>
      ))}
    </div>
  )
}

