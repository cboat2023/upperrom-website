import Layout from '../components/Layout';
import SermonCard from '../components/SermonCard';
import ImageSlider from '../components/ImageSlider';
import Link from 'next/link';
import Head from 'next/head';
import { 
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const sermons = [
    {
      title: "Upper Room AG Sunday Service",
      date: "July 21, 2025",
      thumbnail: "https://img.youtube.com/vi/kxHNVY8gMD4/maxresdefault.jpg",
      youtubeId: "kxHNVY8gMD4",
      description: "Join us for our Sunday worship service"
    },
    {
      title: "Upper Room AG Worship & Teaching",
      date: "July 14, 2025", 
      thumbnail: "https://img.youtube.com/vi/pK5Wx1Mh1RI/maxresdefault.jpg",
      youtubeId: "pK5Wx1Mh1RI",
      description: "Experience powerful worship and biblical teaching"
    },
    {
      title: "Upper Room AG Ministry Service",
      date: "July 7, 2025",
      thumbnail: "https://img.youtube.com/vi/UivtcepqMdA/maxresdefault.jpg",
      youtubeId: "UivtcepqMdA",
      description: "Come and encounter God's presence with us"
    }
  ];

  const events = [
    {
      title: "Morning Glory",
      date: "Every Sunday 8:30AM - 10:00AM EST",
      location: "With Mavis Ankama Quaye",
      image: "/mavis morning glory.jpg"
    },
    {
      title: "2025 Rulers Convention", 
      date: "July 21st - 25th, 7PM - 9:30PM",
      location: "1074 Franklin Ave, Bronx NY 10456",
      image: "/rulers convention.jpg"
    },
    {
      title: "Gathering of Worshippers 2025",
      date: "Saturday July 26th, 6PM - 10PM",
      location: "1074 Franklin Ave, Bronx NY 10456",
      image: "/gow.jpg"
    }
  ];

  // Hero slider images
  const heroImages = [
    '/upperroom.jpg',
    '/pmarkworship.jpg',
    '/gow.jpg',
    '/rulers convention.jpg'
  ];

  return (
    <>
      <Head>
        <title>Upper Room AG - Experience God's Presence in the Bronx</title>
        <meta name="description" content="Upper Room Assemblies of God in the Bronx, NY. Join us Sundays at 11:00 AM. Led by Pastor Mark Asante Manu. Experience God's presence, grow in Christ, and serve the city." />
        <meta name="keywords" content="Upper Room AG, Assemblies of God, Bronx church, Pastor Mark Asante Manu, Sunday service, prayer night" />
      </Head>
      <Layout>
        
        {/* Full-Screen Hero Section with Image Slider Background */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Full-Screen Image Slider Background */}
          <div className="absolute inset-0 w-full h-full">
            <ImageSlider 
              images={heroImages}
              autoSlide={true}
              slideInterval={5000}
              className="w-full h-full"
            />
          </div>
          
          {/* Semi-Transparent Dark Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>
          
          {/* Encounter God Label */}
          <div className="absolute top-8 left-8 md:top-16 md:left-16 z-30">
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
              <span className="text-white text-xs md:text-sm font-montserrat tracking-wider">
                ENCOUNTER GOD
              </span>
            </div>
          </div>
          
          {/* Centered Hero Content Overlay */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20">
            <div className="text-center px-4 md:px-6 max-w-6xl mx-auto">
              {/* Welcome Text */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 md:mb-6 font-inter">
                Welcome To
              </h1>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-montserrat mb-6 md:mb-8">
                Upper Room AG
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 font-inter leading-relaxed max-w-4xl mx-auto">
                Equipping People To Be Like Jesus
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Link href="/newhere">
                  <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 font-montserrat text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                    PLAN A VISIT
                  </button>
                </Link>
                <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 font-montserrat text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <span>NEW HERE?</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Times & Location - You're Invited Section */}
        <section className="w-screen h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
          <div className="w-full flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-5xl">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-montserrat">
                You're Invited!
              </h2>
              
              {/* Address */}
              <div className="mb-12">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-1 mb-6">
                  <div className="w-12 h-0.5 bg-white mx-auto"></div>
                </div>
                <p className="text-xl text-white/90 font-inter mb-8">
                  1074 Franklin Ave, Bronx, NY 10456
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                  <a 
                    href="https://maps.google.com/?q=1074+Franklin+Ave,+Bronx,+NY+10456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors font-montserrat text-base"
                  >
                    GET DIRECTIONS
                  </a>
                  <Link href="/sermons">
                    <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold px-8 py-3 rounded-full transition-colors font-montserrat text-base">
                      WATCH ONLINE
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Service Times Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Sunday School */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
                  <ClockIcon className="w-12 h-12 text-white mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                    Sunday School
                  </h3>
                  <p className="text-lg text-white/90 font-inter">
                    10:00 - 11:00 AM
                  </p>
                </div>
                
                {/* First Service */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
                  <ClockIcon className="w-12 h-12 text-white mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                    Sunday Morning
                  </h3>
                  <p className="text-lg text-white/90 font-inter">
                    11:00 AM - 1:30 PM
                  </p>
                </div>
                
                {/* NextGen Youth Service */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
                  <ClockIcon className="w-12 h-12 text-white mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                    NextGen Youth
                  </h3>
                  <p className="text-lg text-white/90 font-inter">
                    2:00 - 4:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE SPIRIT Theme Section */}
        <section className="w-screen flex items-center justify-center bg-white">
          <div className="w-full">
            <img 
              src="/upperroom.jpg" 
              alt="THE SPIRIT - The Spirit of the LORD is upon Me - Luke 4:18A - Upper Room Assembly of God 2025 Theme"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Recent Messages */}
        <section className="w-screen h-[80vh] flex items-center justify-center bg-white">
          <div className="w-full flex flex-col items-center justify-center px-12 text-center">
            <div className="max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                Recent Messages
              </h2>
              <p className="text-xl text-gray-600 mb-16 font-inter leading-relaxed">
                Catch up on our latest sermons and teachings
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center mb-16">
                {sermons.map((sermon, index) => (
                  <SermonCard
                    key={index}
                    title={sermon.title}
                    date={sermon.date}
                    thumbnail={sermon.thumbnail}
                    youtubeId={sermon.youtubeId}
                    description={sermon.description}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/sermons">
                  <button className="bg-teal-600 text-white font-semibold px-10 py-4 rounded-xl hover:bg-teal-700 transition-colors font-montserrat text-lg">
                    View All Messages
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pastor Quote - Image Background */}
        <section 
          className="w-screen h-[80vh] flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/pmarkworship.jpg')"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center justify-center px-12">
            <div className="max-w-6xl text-center">
              <blockquote className="text-3xl md:text-4xl text-white font-inter italic leading-relaxed mb-10">
                "At Upper Room, we believe in building a house of prayer for all nations, right here in the Bronx."
              </blockquote>
              <cite className="text-white/90 font-semibold font-montserrat text-xl">
                — Pastor Mark Asante Manu, Lead Pastor
              </cite>
            </div>
          </div>
        </section>

        {/* Get Connected Section */}
        <section className="w-screen h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="w-full flex flex-col items-center justify-center px-12 text-center">
            <div className="max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                Get Connected
              </h2>
              <p className="text-xl text-gray-600 mb-16 font-inter leading-relaxed">
                Join our community and grow in faith together
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Small Groups */}
                <div className="p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Small Groups</h3>
                  <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                    Connect with others in intimate study and fellowship
                  </p>
                  <Link href="/groups">
                    <button className="bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition-colors font-montserrat text-lg">
                      Find a Group
                    </button>
                  </Link>
                </div>
                
                {/* Volunteering */}
                <div className="p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Volunteer</h3>
                  <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                    Use your gifts to serve our community and beyond
                  </p>
                  <button className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors font-montserrat text-lg">
                    Get Involved
                  </button>
                </div>
                
                {/* Membership */}
                <div className="p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Membership</h3>
                  <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                    Become an official member of our church family
                  </p>
                  <button className="bg-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-purple-700 transition-colors font-montserrat text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section 
          className="w-screen h-[80vh] flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/whatshappening.jpg')"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center justify-center px-12 text-center">
            <div className="max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                What's Happening
              </h2>
              <p className="text-xl text-white/90 mb-16 font-inter leading-relaxed">
                Join us for upcoming events and gatherings
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {events.map((event, index) => (
                  <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm mx-auto">
                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-900 min-h-[3rem] flex items-center">
                        {event.title}
                      </h3>
                      <div className="flex items-center justify-center mb-2 text-gray-600">
                        <CalendarDaysIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="font-inter text-sm leading-tight">
                          {event.date}
                        </span>
                      </div>
                      <div className="text-gray-600 font-inter text-sm text-center">
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/events">
                <button className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors font-montserrat text-lg shadow-lg">
                  View All Events
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-screen h-[80vh] flex items-center justify-center bg-gradient-to-br from-teal-600 via-teal-700 to-orange-500">
          <div className="w-full flex flex-col items-center justify-center px-12 text-center">
            <div className="max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-montserrat">
                Ready to Take Your Next Step?
              </h2>
              <p className="text-xl text-teal-100 mb-12 font-inter leading-relaxed">
                Join us this Sunday at 11:00 AM. Come as you are and encounter the living God.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/newhere">
                  <button className="bg-white text-teal-700 font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-montserrat text-lg shadow-xl">
                    Plan Your Visit
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-white text-white font-semibold px-10 py-4 rounded-xl hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105 font-montserrat text-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
// This is the main landing page for Upper Room Assemblies of God.
// It features a full-screen hero section with an image slider, service times, recent sermons,
// and a call to action for new visitors.
// The page is designed to be visually appealing and user-friendly, with a focus on inviting people
// to experience the church community and its mission.
// The layout is responsive and uses Tailwind CSS for styling.