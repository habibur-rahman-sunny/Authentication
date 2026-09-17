import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-10 text-center shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">
          Authentication
        </h1>

        <p className="mt-3 text-gray-600">
          Sign up or sign in to access your account.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/auth/signin"><button className="rounded-lg bg-black px-5 py-2 text-white">Sign In</button></Link>
          <Link href="/auth/signup"><button className="rounded-lg border px-5 py-2 text-gray-900">Sign Up</button></Link>
        </div>
      </div>
    </main>
  );
}