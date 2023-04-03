import styles from "../styles/components/SignUp.module.css"
import { useState } from "react"
import { useSignUpEmailPassword } from "@nhost/react"
import { Link, Navigate } from "react-router-dom"
import Input from "./Input"
import Spinner from "./Spinner"
import { NhostClient } from '@nhost/nhost-js'

const nhost = new NhostClient({
  subdomain: "localhost",
  // region: "us-east-1"
  // subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  // region: process.env.REACT_APP_NHOST_REGION
})

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
    useSignUpEmailPassword()

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    // console.log(email, password, firstName, lastName)

    await nhost.auth.signUp({
      email: 'joe@example.com',
      password: 'secret-password'
    })

    // signUpEmailPassword(email, password, {
    //   displayName: `${firstName} ${lastName}`.trim(),
    //   metadata: {
    //     firstName,
    //     lastName
    //   }
    // })
  }

  if (isSuccess) {
    return <Navigate to="/" replace={true} />
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["logo-wrapper"]}>
          <img src={process.env.PUBLIC_URL + "rebound-logo-large.png"} alt="logo" />
        </div>

        {needsEmailVerification ? (
          <p className={styles["verification-text"]}>
            {/* Please check your mailbox and follow the verification link to verify your email. */}
            <Link to="/sign-in" className={styles.link}>Click here</Link> to sign in
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className={styles.form}>
            <div className={styles["input-group"]}>
              <Input
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={disableForm}
                required
              />
              <Input
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={disableForm}
                required
              />
            </div>
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <Input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />

            <button type="submit" disabled={disableForm} className={styles.button}>
              {isLoading ? <Spinner size="sm" /> : "Create account"}
            </button>

            {isError ? <p className={styles["error-text"]}>{error?.message}</p> : null}
          </form>
        )}
      </div>

      <p className={styles.text}>
        Already have an account?{" "}
        <Link to="/sign-in" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUp