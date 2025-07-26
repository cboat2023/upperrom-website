import { PlayIcon } from '@heroicons/react/24/solid';

interface SermonCardProps {
  title: string;
  date: string;
  thumbnail: string;
  youtubeId?: string;
  description?: string;
  onClick?: () => void;
}

export default function SermonCard({ title, date, thumbnail, youtubeId, description, onClick }: SermonCardProps) {
  const handleClick = () => {
    if (youtubeId) {
      // Open YouTube video in new tab
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:scale-105 transition-transform duration-300">
        {/* Thumbnail with play overlay */}
        <div className="relative h-48 bg-gray-200">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <PlayIcon className="w-8 h-8 text-teal-600" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-montserrat font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 mb-2 font-inter line-clamp-2">
              {description}
            </p>
          )}
          <p className="text-sm text-gray-500 font-inter">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
