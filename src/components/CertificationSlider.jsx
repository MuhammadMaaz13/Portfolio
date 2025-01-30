import React, { useState } from "react";
import htmlCssImage from "../assets/htmlCss-min.jpg";
import jsImage from "../assets/js-min.jpg";
import frontImage from "../assets/introFront-min.jpg";
import dataImage from "../assets/dataIntro-min.jpg";
import dToolImage from "../assets/dataTools-min.jpg";
const CertificationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImages = [
    {
      title: "HTML CSS IN Depth by Meta",
      url: htmlCssImage,
    },
    {
      title: "JavaScript by Meta",
      url: jsImage,
    },
    {
      title: "Intro To Front-end bt Meta",
      url: frontImage,
    },
    {
      title: "Intro to Data Science by IBM",
      url: dataImage,
    },
    {
      title: "Tools For Data Science by IBM",
      url: dToolImage,
    },
  ];
  const handleNext = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handlePrevious = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToCer = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slide-detail">
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slideImages[currentIndex].url})`,
        }}
      >
        <div className="arrow left-arrow" onClick={handlePrevious}>
          &#129032;{" "}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          &#129034;
        </div>
      </div>

      <div className="image-title">{slideImages[currentIndex].title}</div>

      <div className="all-images">
        {slideImages.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
            className={`images ${
              currentIndex === index ? "blurred" : "active"
            }`}
            onClick={() => goToCer(index)}
          >
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSlider;

// transform: direction === "right" ? "translateX(100%)" : "translateX(-100%)",
