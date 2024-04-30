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
    "https://mobilecontent.costco.com/live/resource/img/24w08143/d_24w08143_Hero_Apple_Watch_Mothers_Day.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w06223/d_24w06223_hero_april_mvm_tires.jpg",
    "https://mobilecontent.costco.com/live/resource/img/20240429_EUR_Imgs/20240429_Europe_US_ComHero_D.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w08101/d_24w08101_appliances_homepage_hero_v03.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w09075/d_24w09075_hero_mothers_day_gift_ideas.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w09038/d_24w09038_april_audio_event_home_hero.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w09041/d_24w09041_hero_apparel.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w09040/d-24w09040_homepage_hero_mothers_day_bms.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w09058/d_24w09058_hero_first_quailty.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w09038/d_24w09038_april_audio_event_home_hero.jpg",
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
