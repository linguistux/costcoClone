import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey", borderRadius: "100px" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  let arr = [
    "src/assets/HomeIMG/Slider1/1.jpg",
    "src/assets/HomeIMG/Slider1/12.jpg",
    "src/assets/HomeIMG/Slider1/3.jpg",
    "src/assets/HomeIMG/Slider1/4.jpg",
    "src/assets/HomeIMG/Slider1/6.jpg",
    "src/assets/HomeIMG/Slider1/7.jpg",
    "src/assets/HomeIMG/Slider1/8.jpg",
    "src/assets/HomeIMG/Slider1/9.jpg",
    "src/assets/HomeIMG/Slider1/10.jpg",
    "src/assets/HomeIMG/Slider1/11.jpg",
  ];

  return (
    <Box p={["7", "7", "10", "20"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Slider {...settings}>
        {arr.map((elem, i) => (
          <img src={elem} alt="slider" key={i} />
        ))}
      </Slider>
    </Box>
  );
}
