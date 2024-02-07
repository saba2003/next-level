import Link from "next/link";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <main>
        <h2 className="text-primary text-center">Sign up!</h2>
        <SignUpForm />
        <h2 className="text-gray-500 text-center">already have an account?  
          <Link className="link text-primary text-center" href="/account/logIn"> Log in!</Link>
        </h2>
    </main>
  )
}
