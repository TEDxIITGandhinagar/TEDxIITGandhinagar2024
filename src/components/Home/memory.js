import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const HorizontalScrollGallery = ({ images }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
    });

    // Cleanup function to destroy Locomotive Scroll instance on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  const handleImageClick = (image) => {
    image.current.classList.add('-clicked');
    hideImages();
  };

  const showImages = () => {
    images.forEach((image) => image.current.classList.remove('-clicked'));
    images.forEach((image) => image.current.classList.add('-active'));
  };

  const hideImages = () => {
    images.forEach((image) => image.current.classList.remove('-active'));
    setTimeout(() => showImages(), 2000);
  };

  return (
    <div className="scroll-animations-example" data-scroll-container ref={scrollContainerRef}>
      <div className="scrollsection" data-scroll-section>
        {images.map((imageSrc, index) => (
          <div key={index} className={`item -${imageSizes[index]}`}>
            <img
              ref={(ref) => (images[index] = ref)}
              className="image"
              src={imageSrc}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(images[index])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const imageSizes = ['normal', 'big', 'small', 'normal', 'normal', 'big', 'small', 'normal']

export default HorizontalScrollGallery;
