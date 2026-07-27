import { AuthSplitLayout } from '../components/auth/AuthSplitLayout.jsx'
import { AuthCard } from '../components/auth/AuthCard.jsx'
import { AuthField } from '../components/auth/AuthField.jsx'
import { Button } from '../components/Button.jsx'

export default function Signup() {
  return (
    <AuthSplitLayout
      eyebrow="Create account"
      title="Join GrowCommunityBiz."
      description="Create your account to connect with local businesses, share updates, and build community momentum."
    >
      <AuthCard>
        <div className="gcb-auth-card__head">
          <span className="gcb-overline">Signup</span>
          <h2>Create Account</h2>
          <p>Start building your presence with a polished local profile.</p>
        </div>
        <form className="gcb-auth-form">
          <AuthField type="text" label="Full Name" placeholder="Your full name" autoComplete="name" />
          <AuthField type="text" label="Username" placeholder="yourname" autoComplete="username" />
          <AuthField type="email" label="Email" placeholder="you@example.com" autoComplete="email" />
          <AuthField type="password" label="Password" placeholder="••••••••" autoComplete="new-password" />
          <AuthField type="password" label="Confirm Password" placeholder="••••••••" autoComplete="new-password" />
          <label className="gcb-auth-check gcb-auth-terms">
            <input type="checkbox" />
            <span>I agree to the terms and privacy policy</span>
          </label>
          <Button type="button" variant="primary" className="gcb-auth-submit">
            Create Account
          </Button>
        </form>
        <p className="gcb-auth-footnote">
          Already have an account? <a href="/login">Login</a>
        </p>
      </AuthCard>
    </AuthSplitLayout>
  )
}

