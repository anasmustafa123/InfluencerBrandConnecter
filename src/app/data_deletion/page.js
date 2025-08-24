export default function DataDeletionPage() {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
        <main className="flex flex-col items-center justify-center text-center flex-1 px-6">
          <h1 className="text-2xl font-bold mb-4">Data Deletion Request</h1>
          <p className="text-lg max-w-xl">
            If you signed up using Facebook and would like your data deleted, 
            please contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>. 
            We will remove your data from our servers.
          </p>
        </main>
      </div>
    );
  }
  