import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Read our latest blog posts and updates
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "Blog" section of the website.
// It provides a space for the church to share news, updates, and articles.