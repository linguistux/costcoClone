import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Cards = ({ cardText, image, textColor, imageBg }) => {
  return (
    <Box>
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
                src="src\assets\HomeIMG\Section2\costco-direct-vector-badge.svg"
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
              cardText="SAVE $400"
              image="src\assets\HomeIMG\Section2\24w05146-img-buy-5-items_patio.png"
              textColor={"#005BA3"}
              imageBg={"white"}
            />

            <Cards
              cardText="SAVE $300"
              image="src\assets\HomeIMG\Section2\24w05146-img-buy-4-items_patio.png"
              textColor={"#015391"}
              imageBg={"#EBEBEB"}
            />

            <Cards
              cardText="SAVE $200"
              image="src\assets\HomeIMG\Section2\24w05146-img-buy-3-items_patio.png"
              textColor={"#005BA3"}
              imageBg={"white"}
            />

            <Cards
              cardText="SAVE $100"
              image="src\assets\HomeIMG\Section2\24w05146-img-buy-2-items_patio.png"
              textColor={"#015391"}
              imageBg={"#EBEBEB"}
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

      <Flex
        pr={20}
        pl={20}
        pt={4}
        justifyContent={"center"}
        display={["none", "none", "flex", "flex"]}
      >
        <img
          src="src\assets\HomeIMG\Section2\d_24w08185_banner_huggies.jpg"
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
          src="src\assets\HomeIMG\Section2\m_24w08185_banner_huggies.jpg"
          alt=""
        />
      </Flex>
    </Box>
  );
};

export default Section2;
