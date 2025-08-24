import Link from "next/link";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="max-w-2xl text-gray-700 text-center mb-6">
        Welcome to our Privacy Policy page. Your privacy is important to us.
        Here we describe how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="max-w-2xl text-gray-700 mb-4">
        We collect personal information such as your name and email when you
        sign up, as well as usage data to improve our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
      <p className="max-w-2xl text-gray-700 mb-4">
        Your data is used to provide our services, communicate with you, and
        enhance your experience.
      </p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
