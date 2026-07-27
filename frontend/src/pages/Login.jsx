import { AuthSplitLayout } from '../components/auth/AuthSplitLayout.jsx'
import { AuthCard } from '../components/auth/AuthCard.jsx'
import { AuthField } from '../components/auth/AuthField.jsx'
import { Button } from '../components/Button.jsx'

export default function Login() {
  return (
    <AuthSplitLayout
      eyebrow="Welcome back"
      title="Welcome back to GrowCommunityBiz."
      description="Sign in to manage your profile, business listings, and community activity from one premium dashboard."
    >
      <AuthCard>
        <div className="gcb-auth-card__head">
          <span className="gcb-overline">Login</span>
          <h2>Welcome Back</h2>
          <p>Access your account and keep your local business network moving.</p>
        </div>
        <form className="gcb-auth-form">
          <AuthField type="email" label="Email" placeholder="you@example.com" autoComplete="email" />
          <AuthField type="password" label="Password" placeholder="••••••••" autoComplete="current-password" />
          <div className="gcb-auth-row">
            <label className="gcb-auth-check">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <Button type="button" variant="primary" className="gcb-auth-submit">
            Login
          </Button>
          <button type="button" className="gcb-auth-google">
            Continue with Google
          </button>
        </form>
        <p className="gcb-auth-footnote">
          New here? <a href="/signup">Create an account</a>
        </p>
      </AuthCard>
    </AuthSplitLayout>
  )
}

