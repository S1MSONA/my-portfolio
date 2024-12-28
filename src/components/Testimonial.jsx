import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/img/img1.jpg";
import image2 from "../assets/img/img2.jpg";
import image3 from "../assets/img/img3.jpg";
import image4 from "../assets/img/img4.jpg";
import image5 from "../assets/img/img5.jpg";
import image6 from "../assets/img/img6.jpg";

const images = [
  {
    img: image1,
    name: "John Doe",
    job: "Web Developer",
  },
  {
    img: image2,
    name: "John Doe",
    job: "Web Developer",
  },
  {
    img: image3,
    name: "John Doe",
    job: "Web Developer",
  },
  {
    img: image4,
    name: "John Doe",
    job: "Web Developer",
  },
  {
    img: image5,
    name: "John Doe",
    job: "Web Developer",
  },
  {
    img: image6,
    name: "John Doe",
    job: "Web Developer",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <button className="absolute top-1/2 transform -translate-y-1/2 bg-black text-white p-3 cursor-pointer z-10 rounded-full left-[-50px]">
        {/* <Previous></Previous> */}
      </button>
    ),
    nextArrow: (
      <button className="absolute top-1/2 transform -translate-y-1/2 bg-black text-white p-3 cursor-pointer z-10 rounded-full right-[-50px]">
        Next
      </button>
    ),
    appendDots: (dots) => (
      <div className="bottom-[-30px]">
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-[#e8e8e8] transition-all duration-300 z-0 px-8 sm:px-14 md:px-20 xl:px-38">
      <Slider {...settings}>
        {images.map(({ img, name, position }, index) => (
          <div key={index} className="p-2">
            <img
              className="w-full rounded-lg h-[400px]"
              src={img}
              alt={`Slide ${index}`}
            />
            <h1>{name}</h1>
            <p>{position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
