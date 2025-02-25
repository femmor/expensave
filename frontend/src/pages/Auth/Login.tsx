import { FormEvent, useState } from "react"
import { AuthLayout, Button, Input } from "../../components"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // Handles form submission
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center lg:w-[70%] h-3/4 md:h-full">
        <h3 className="text-xl font-semibold text-black">Welcome Back!</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in.</p>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col mb-4">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password (min 8 characters)"
            />

            {error && <p className="">{error}</p>}

            <Button type="submit" className="btn-primary">Login</Button>

            <p className="text-xs text-slate-700 mt-2 text-center">
              Don't have an account?{" "}
              <Link
                className="text-blue-500 cursor-pointer hover:underline"
                to="/sign-up"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
export default Login