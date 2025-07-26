import Layout from '../components/Layout';

export default function NewHere() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Plan a Visit
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            New here? Learn what to expect when you visit us
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "New Here" section of the website.
// It provides information for first-time visitors, including what to expect during a service,
// directions to the church, and any special accommodations available.