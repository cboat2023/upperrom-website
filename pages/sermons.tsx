import Layout from '../components/Layout';

export default function Sermons() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Sermons
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Watch and listen to past sermons
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "Sermons" section of the website.
// It provides a space for the church to share recorded sermons and teachings.
// You can include video or audio players, sermon notes, and links to download or stream the content.
// This section is designed to help members and visitors access spiritual teachings and grow in their faith.
// The Layout component wraps the content to maintain consistent styling and structure across pages.
// The page is styled with Tailwind CSS for a modern and responsive design.