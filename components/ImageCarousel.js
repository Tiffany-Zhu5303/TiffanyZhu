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
    <div className="relative w-5/6 h-[500px] md:h-[525px] mt-8 bg-white/50 rounded-lg shadow-lg p-8 lg:p-10 m-10 mb-10 flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full h-full flex flex-col-reverse lg:flex-col items-center justify-between">
          { images[currentIndex].endsWith('.mp4') ?
            <video
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={900}
              height={900}
              className="w-5/6 h-5/6"
              autoPlay
              loop
              muted
              playsInline
            />
          :
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={900}
              height={900}
              className="w-5/6 h-5/6"
              loading="lazy"
            />
          }
          <p className="pb-4 md:p-4">{currentIndex+1}/{images.length}</p>
        </div>
        <div className="w-full lg:w-1/4 h-full p-4 flex flex-col items-center">
          <p className="font-bold">{titles[currentIndex]}</p>
          <p className="pt-4 leading-[2vh]">{descriptions[currentIndex]}</p>
        </div>
      </div>
      
      <button
        onClick={prevImage}
        className="absolute left-2 top-3/4 lg:top-1/2 transform p-2 rounded-full shadow-lg border border-dark-purple/25"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-3/4 lg:top-1/2 transform p-2 rounded-full shadow-lg border border-dark-purple/25"
      >
        &gt;
      </button>
    </div>
  );
}