import { AuthSplitLayout } from '../components/auth/AuthSplitLayout.jsx'
import { AuthCard } from '../components/auth/AuthCard.jsx'
import { AuthField } from '../components/auth/AuthField.jsx'
import { Button } from '../components/Button.jsx'

export default function ForgotPassword() {
  return (
    <AuthSplitLayout
      eyebrow="Account recovery"
      title="Reset your password with confidence."
      description="Enter the email linked to your account and we’ll guide you back in with a clean, secure recovery flow."
    >
      <AuthCard>
        <div className="gcb-auth-card__head">
          <span className="gcb-overline">Forgot Password</span>
          <h2>Recover access</h2>
          <p>We’ll send a password reset link to your email address.</p>
        </div>
        <form className="gcb-auth-form">
          <AuthField type="email" label="Email" placeholder="you@example.com" autoComplete="email" />
          <Button type="button" variant="primary" className="gcb-auth-submit">
            Send Reset Link
          </Button>
        </form>
        <p className="gcb-auth-footnote">
          Remember your password? <a href="/login">Back to login</a>
        </p>
      </AuthCard>
    </AuthSplitLayout>
  )
}

