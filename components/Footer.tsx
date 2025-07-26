import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo, Address, Contact */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                UPPER ROOM AG
              </h3>
              <p className="text-gray-400 font-inter">Assemblies of God</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter">1074 Franklin Ave</p>
                  <p className="text-gray-300 font-inter">Bronx, NY 10456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-gray-300 font-inter">(917) 645-5100</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-gray-300 font-inter">bassemblyofgod@yahoo.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter">Sunday Service: 11:00 AM</p>
                  <p className="text-gray-300 font-inter">Friday Prayer Night: 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6 uppercase">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors font-inter">
                About Us
              </Link>
              <Link href="/newhere" className="block text-gray-300 hover:text-white transition-colors font-inter">
                Plan a Visit
              </Link>
              <Link href="/groups" className="block text-gray-300 hover:text-white transition-colors font-inter">
                Ministries
              </Link>
              <Link href="/sermons" className="block text-gray-300 hover:text-white transition-colors font-inter">
                Sermons
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white transition-colors font-inter">
                Events
              </Link>
              <Link href="/give" className="block text-gray-300 hover:text-white transition-colors font-inter">
                Give Online
              </Link>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6 uppercase">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              Experience God's presence at Upper Room AG. Stay connected with our church community for updates, inspiration, and fellowship.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © {new Date().getFullYear()} Upper Room AG. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors font-inter">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors font-inter">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
