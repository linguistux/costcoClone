import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";

function MultipleItems() {
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

  let arr = [
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService.jpeg",
      title: "Yardistry 12' x 14' Contemporary Gazebo with Aluminum Roof",
      Price: "$2,599.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (2).jpeg",
      title:
        "StriVectin Peptide Plump Line Filling Bounce Serum, 1.0 fl oz + 0.5 fl oz",
      Price: "$29.95",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (3).jpeg",
      title: "adidas Youth 2-pack Short",
      Price: "$40.45",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (1).jpeg",
      title: "Yardistry 12' x 20' Gazebo with Aluminum Roof",
      Price: "$1200.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (5).jpeg",
      title: "Macbook Air",
      Price: "$600",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (7).jpeg",
      title: "Yardistry 12' x 16' Gazebo with Aluminum Roof",
      Price: "$1160.89",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (11).jpeg",
      title: "adidas Youth Performance Polo and Tee Set",
      Price: "$50.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (12).jpeg",
      title: "Mackbook Air Pro",
      Price: "$800",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (14).jpeg",
      title: "Yardistry 12' x 24' Gazebo with Aluminum Roof with Dinning",
      Price: "$1500.92",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (13).jpeg",
      title: "Yardistry 12' x 24' Gazebo with Aluminum Roof",
      Price: "$2500.40",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (4).jpeg",
      title: "Yardistry 12' Gazebo Open",
      Price: "$1100",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (6).jpeg",
      title: "Yardistry 12' x 12' Gazebo with Aluminum Roof",
      Price: "$1300",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (9).jpeg",
      title: "Sojag Messina Galvanized Steel Roof Gazebo",
      Price: "$2360.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (8).jpeg",
      title: "Sojag Messina Gazebo Steel Roof Gazebo",
      Price: "$2100.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (10).jpeg",
      title: "Yardistry 12' x 16' Gazebo with Aluminum Roof",
      Price: "$2500.99",
    },
    {
      image: "src/assets/HomeIMG/MultiItemSlider1/imageService (16).jpeg",
      title: "Yardistry 12' x 16' Gazebo Open with Dinning",
      Price: "$1588.80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <Box p={["7", "7", "10", "20"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Text fontWeight={400} fontSize={"30px"} mb={3} textAlign={"center"}>
        Selected For You
      </Text>

      <Slider {...settings}>
        {arr.map((elem, i) => (
          <SimpleGrid key={i} cursor={"pointer"} p={5}>
            <Box mb={3}>
              <img src={elem.image} alt="slider" />
            </Box>
            <Text fontSize={"24px"} fontWeight={400}>
              {elem.Price}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              color={"rgb(0, 96, 169)"}
              _hover={{ textDecoration: "underline solid rgb(0,96,169)" }}
            >
              {elem.title}
            </Text>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
}

export default MultipleItems;
