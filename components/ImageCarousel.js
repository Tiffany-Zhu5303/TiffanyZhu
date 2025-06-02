import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images, titles, descriptions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-5/6 h-full mt-8 overflow-hidden bg-white/50 rounded-lg shadow-lg p-10 flex flex-col items-center">
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-3/4 h-full flex flex-col items-center justify-between">
          { images[currentIndex].endsWith('.mp4') ?
            <video
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={1000}
              height={1000}
              className="w-4/5 h-full object-cover"
              autoPlay
              loop
              muted
            />
          :
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={700}
              height={700}
              className="w-4/5 h-full object-cover"
            />
          }
          <p>{currentIndex+1}/{images.length}</p>
        </div>
        <div className="w-1/4 h-full p-4 flex flex-col items-center justify-between">
          <p className="font-bold">{titles[currentIndex]}</p>
          <p className="">{descriptions[currentIndex]}</p>
        </div>
      </div>
      
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform p-2 rounded-full shadow-lg border border-dark-purple/25"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform p-2 rounded-full shadow-lg border border-dark-purple/25"
      >
        &gt;
      </button>
    </div>
  );
}