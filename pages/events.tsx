import Layout from '../components/Layout';

export default function Events() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Events
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            View upcoming events and church calendar
          </p>
          {/* Google Calendar embed will go here */}
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "Events" section of the website.
// It provides a space for the church to display upcoming events and activities.
// You can embed a Google Calendar or list events manually.