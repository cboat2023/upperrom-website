import Layout from '../components/Layout';

export default function Kids() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Cornerstone Kids
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Children&apos;s ministry and programs
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "Kids" section of the website.
// It provides information about the children's ministry, programs, and activities available for kids at the church.
// You can include details about Sunday school, special events, and resources for parents.
// The Layout component wraps the content to maintain consistent styling and structure across pages.