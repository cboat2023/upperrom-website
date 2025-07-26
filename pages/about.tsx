import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about Cornerstone Church and our mission
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "About" section of the website.
// It provides information about the church, its mission, and values.
// The Layout component wraps the content to maintain consistent styling and structure across pages.
// The page is styled with Tailwind CSS for a modern and responsive design.
// The content is centered and padded for readability, with a focus on accessibility and user experience.
// You can expand this page with more details, images, or links to other resources as needed