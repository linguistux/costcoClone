import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <Box>
      <Text fontWeight={400} fontSize={"30px"} mb={1} textAlign={"center"}>
        Frequently Viewed Categories
      </Text>

      <SimpleGrid
        fontSize={"16px"}
        fontWeight={400}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(6,1fr)",
        ]}
        gap={[5, 5, 8, 12]}
        p={[5, 5, 10, 20]}
        pt={[7, 7, 7, 7]}
        pb={[7, 7, 7, 7]}
      >
        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/patio-covers'}>
          <Box mb={[0, 0, 0, 3]}>
            <img
              src="src\assets\HomeIMG\Section4\outdoor-structures.jpg"
              alt=""
              />
          </Box>
          <Text>Patio Covers & Shade Structures</Text>
              </Link>
        </Flex>

        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/patio-covers'}>
          <Box mb={[0, 0, 0, 3]}>
            <img src="src\assets\HomeIMG\Section4\living-room.jpg" alt="" />
          </Box>
          <Text>Living Room Furniture</Text>
          </Link>
        </Flex>

        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/patio-covers'}>
          <Box mb={[0, 0, 0, 3]}>
            <img src="src\assets\HomeIMG\Section4\patio-furniture.jpg" alt="" />
          </Box>
          <Text>Patio & Outdoor Furniture</Text>
          </Link>
        </Flex>

        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/mens-clothing'}>
          <Box mb={[0, 0, 0, 3]}>
            <img src="src\assets\HomeIMG\Section4\mens-clothing.jpg" alt="" />
          </Box>
          <Text>Clothing for Men</Text>
          </Link>
        </Flex>

        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/women-clothing'}>
          <Box mb={[0, 0, 0, 3]}>
            <img src="src\assets\HomeIMG\Section4\womens-clothing.jpg" alt="" />
          </Box>
          <Text>Clothing for Women</Text>
          </Link>
        </Flex>

        <Flex
          display={["flex", "flex", "flex", "block"]}
          textAlign={"center"}
          alignItems={"center"}
          border={[
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "1px solid rgba(0,0,0,0.4)",
            "none",
          ]}
          cursor={"pointer"}
          justifyContent={"space-around"}
        >
          <Link to={'/computer'}>
          <Box mb={[0, 0, 0, 3]}>
            <img src="src\assets\HomeIMG\Section4\rwd-laptops.jpg" alt="" />
          </Box>
          <Text>Laptops & Notebook Computers</Text>
          </Link>
        </Flex>
      </SimpleGrid>

      <Flex
        pr={20}
        pl={20}
        pt={4}
        justifyContent={"center"}
        display={["none", "none", "flex", "flex"]}
      >
        <Link to={'/baby'}>
        <img
          src="src\assets\HomeIMG\Section4\d_24w09016_banner_pulls_ups_v2.jpg"
          alt=""
          />
          </Link>
      </Flex>

      <Flex
        pr={5}
        pl={5}
        justifyContent={"center"}
        pt={4}
        display={["flex", "flex", "none", "none"]}
      >
        <Link to={'/baby'}>
        <img
          src="src\assets\HomeIMG\Section4\m_24w09016_banner_pulls_ups_v2.jpg"
          alt=""
          />
          </Link>
      </Flex>

      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={12}
        p={[2, 5, 8, 20]}
        justifyContent={"center"}
      >
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\24w09017_banner_dove_body_wash.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\24w09021_third_banner_secret.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\24w09020_third_banner_gum.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={12}
        p={[2, 5, 8, 10]}
        justifyContent={"center"}
      >
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\d-24w04235-citibank.jpeg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\d-24w01099-costco-services.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\d-24w01099-sustainability.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
        ]}
        gap={12}
        p={[2, 5, 8, 10]}
        justifyContent={"center"}
      >
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\d-24w01107-banner-membership-v.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="src\assets\HomeIMG\Section4\d-24w01107-banner-renew-membership.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Section4;
