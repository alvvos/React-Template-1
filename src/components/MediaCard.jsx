import { useState } from 'react'

const MediaCard = ({ type, src, caption, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-lg ${isHovered ? 'z-10' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === 'image' ? (
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="relative w-full h-full">
          <img
            src={src}
            alt={caption}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        <span className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {caption}
        </span>
      </div>
    </div>
  );
};

export default MediaCard;