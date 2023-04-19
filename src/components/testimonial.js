import React, { useState } from "react";

const testimonialData = [
  {
    name: "Arena jhon",
    image: "images/Arena.png",
    comment: "I loved using WayFinder! It made my journey so much easier.",
  },
  {
    name: "Jane Doe",
    image: "images/jane.png",
    comment:
      "I highly recommend WayFinder to anyone looking for a reliable navigation app.",
  },
  {
    name: "Bob Smith",
    image: "images/bob.png",
    comment: "WayFinder helped me save time and get to my destination faster.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (activeIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % testimonialData.length);
  };

  const currentTestimonial = testimonialData[activeIndex];

  return (
    <section id="testimonials">
      <div className="test-container">
      <div className="testimonial-heading">
        <img src="images/clientSay.png" alt="logo name" height={"40px"} />
        <p>
          we are connected with 10k+ students and working professionals who are
          using our platform to find career guidance and resources for their
          career development . we are happy to help you out as well.
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonial">
          <div className="details">
            <div className="image-container">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
              />
            </div>
            <div className="content"><div className="name">{currentTestimonial.name}</div>
            <p className="comment">{currentTestimonial.comment}</p></div>
          </div>
        </div>
        <div className="testimonial-nav carousel-navigation">
          <button className="test-btn" onClick={handlePrev}>Prev</button>
          <button className="test-btn" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
