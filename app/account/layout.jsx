export const metadata = {
    title: 'auth',
    description: 'tis be auth',
}

export default function Layout({ children, logIn, signUp }) {
  return (
    <main>
        {children}
        <nav className="justify-evenly">
            <div className="flex flex-wrap">
                {logIn}
                {signUp}
            </div>
        </nav>
    </main>
  )
}