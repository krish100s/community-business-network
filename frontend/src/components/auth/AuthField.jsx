export function AuthField({ label, ...props }) {
  return (
    <label className="gcb-auth-field">
      <span>{label}</span>
      <input {...props} />
    </label>
  )
}

