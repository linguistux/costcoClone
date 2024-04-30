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
          <Link to={"/patio-covers"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/outdoor-structures.jpg"
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
          <Link to={"/furniture"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/living-room.jpg"
                alt=""
              />
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
          <Link to={"/patio-covers"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/patio-furniture.jpg"
                alt=""
              />
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
          <Link to={"/mens-clothing"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/mens-clothing.jpg"
                alt=""
              />
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
          <Link to={"/women-clothing"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/womens-clothing.jpg"
                alt=""
              />
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
          <Link to={"/computer"}>
            <Box mb={[0, 0, 0, 3]}>
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/rwd-laptops.jpg"
                alt=""
              />
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
        <Link to={"/baby"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w07030/d-24w07030_cat_hero_enfamil.jpg"
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
        <Link to={"/baby"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w07030/m-24w07030_cat_hero_enfamil.jpg"
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
            src="https://mobilecontent.costco.com/live/resource/img/20240425_TRV_Marriott_Trio_Img/20240425_Marriott_US_Trio.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w06224/24w06224_april_mvm_third_banner.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w06223/24w06223_third_ban_april_mvm_tires.jpg"
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
            src="https://mobilecontent.costco.com/live/resource/img/24w04235/d-24w04235-citibank.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w01099/d-24w01099-costco-services.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w01099/d-24w01099-sustainability.jpg"
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
            src="https://mobilecontent.costco.com/live/resource/img/24w01107/d-24w01107-banner-membership-v.jpg"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w01107/d-24w01107-banner-renew-membership.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Section4;
