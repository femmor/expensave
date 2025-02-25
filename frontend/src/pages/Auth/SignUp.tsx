import { FormEvent, useState } from "react";
import { AuthLayout, Button, Input, ProfilePhotoSelector } from "../../components";
import { Link } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState<string | null>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  // Handles form submission
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    // let profileImageUrl = "";

    if(!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");

  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details below to create an account.
        </p>

        <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector
          image={profilePic || ""}
          setImage={setProfilePic}
        />

          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4">
            <Input
              type="text"
              id="fullName"
              name="fullName"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
            />
            <div className="col-span-2">
              <Input
                type="password"
                id="password"
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password (min 8 characters)"
              />
            </div>

            <div className="col-span-2">
              {error && (
                <p className="text-xs mb-2 text-red-400 flex items-center justify-center bg-red-50 py-1 rounded">
                  <MdOutlineErrorOutline className="text-red-400 text-[26px] mr-1" />{" "}
                  {error}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <Button type="submit" className="btn-primary">
                SignUp
              </Button>
            </div>

            <div className="col-span-2">
              <p className="text-xs text-slate-700 mt-2 text-center">
                Already have an account?{" "}
                <Link
                  className="text-blue-500 cursor-pointer hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
