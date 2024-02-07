import Link from "next/link";
import LogInForm from "./LogInForm";

export default function LogIn() {
  return (
    <main>
        <h2 className="text-primary text-center">Log in</h2>
        <LogInForm />
        <h2 className="text-gray-500 text-center">don't have an account?  
          <Link className="link text-primary text-center" href="/account/signUp"> Sing up!</Link>
        </h2>
    </main>
  )
}