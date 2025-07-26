import Layout from '../components/Layout';

export default function OurTeam() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-4xl font-bold">
            Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Meet the pastoral staff and leadership team
          </p>
        </div>
      </div>
    </Layout>
  );
}

// This page serves as the "Our Team" section of the website.
// It provides information about the church's pastoral staff and leadership team.
// You can include bios, photos, and roles of each team member to help the congregation get to know their leaders better.
// This section is designed to foster connection and transparency within the church community.
// The Layout component wraps the content to maintain consistent styling and structure across pages.