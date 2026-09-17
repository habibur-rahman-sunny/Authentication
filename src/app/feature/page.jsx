import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome!
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to our website. We are glad to have you here.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/auth/signin"><button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">Sign In</button></Link>
        </div>
      </div>
    </main>
  );
}