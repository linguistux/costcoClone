import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cards = ({ cardText, image, textColor, imageBg }) => {
  return (
    <Box>
      <Link to={"/patio-covers"}>
        <Text
          p={2}
          textAlign={"center"}
          bg={textColor}
          color={"white"}
          fontSize={"2rem"}
          fontWeight={600}
        >
          {cardText}
        </Text>
        <Box bg={imageBg}>
          <img src={image} alt="" />
        </Box>
      </Link>
    </Box>
  );
};

const Section2 = () => {
  return (
    <Box>
      <Box pr={[5, 5, 8, 20]} pl={[5, 5, 8, 20]}>
        <Box border={"1px solid rgba(0,0,0,0.3)"} borderRadius={20} pt={4}>
          <SimpleGrid
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "1fr 1fr 1fr",
              "1fr 1fr 1.4fr",
            ]}
            gap={10}
          >
            <Box>
              <img
                src="https://mobilecontent.costco.com/staging/resource/img/24w05146/costco-direct-vector-badge.svg"
                alt=""
              />
            </Box>

            <Text
              textAlign={["center", "center", "start", "start"]}
              fontSize={"2rem"}
              fontWeight={700}
            >
              Benefit from Buying More
            </Text>

            <Box display={["none", "none", "block", "block"]}>
              <Text fontSize={"large"} fontWeight={600}>
                Combine with other promotions for additional savings!
              </Text>
              <Text>Delivery in 3-5 Days in Most Areas*</Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid
            mt={5}
            gridTemplateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr), repeat(4,1fr)",
              "repeat(4,1fr)",
            ]}
          >
            <Cards
              cardText="SAVE $300"
              image="https://mobilecontent.costco.com/staging/resource/img/24w07060/24w07060_img_why_buy_2_items__home.png"
              textColor={"#015391"}
              imageBg={"#EBEBEB"}
            />

            <Cards
              cardText="SAVE $200"
              image="https://mobilecontent.costco.com/staging/resource/img/24w07060/24w07060_img_why_buy_3_items__home.png"
              textColor={"#005BA3"}
              imageBg={"white"}
            />

            <Cards
              cardText="SAVE $100"
              image="https://mobilecontent.costco.com/staging/resource/img/24w07060/24w07060_img_why_buy_4_items__home.png"
              textColor={"#015391"}
              imageBg={"#EBEBEB"}
            />

            <Cards
              cardText="SAVE $400"
              image="https://mobilecontent.costco.com/staging/resource/img/24w07060/24w07060_img_why_buy_5_items__home.png"
              textColor={"#005BA3"}
              imageBg={"white"}
            />
          </SimpleGrid>
          <Text
            textAlign={"center"}
            bg={"#333333"}
            color={"white"}
            textTransform={"uppercase"}
          >
            online-only | limit 2 redemptions per membership | *see item page
            for details
          </Text>
        </Box>
      </Box>
      <Link to={"/baby"}>
        <Flex
          pr={20}
          pl={20}
          pt={4}
          justifyContent={"center"}
          display={["none", "none", "flex", "flex"]}
        >
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w07030/d-24w07030_cat_hero_enfamil.jpg"
            alt=""
          />
        </Flex>

        <Flex
          pr={5}
          pl={5}
          justifyContent={"center"}
          pt={4}
          display={["flex", "flex", "none", "none"]}
        >
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w07030/m-24w07030_cat_hero_enfamil.jpg"
            alt=""
          />
        </Flex>
      </Link>
    </Box>
  );
};

export default Section2;
