import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w09031/d_24w09031_banner_backyard_oasis.jpg"
            alt=""
          />
        </Link>
      </Flex>

      <SimpleGrid
        textAlign={"center"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={7}
        p={[6, 6, 8, 20]}
      >
        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $2,299.99 After $400 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2127689-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              yardistry contemporary gazebo
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $1,799.99 After $500 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000195905-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              agio portland patio seating set
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $479.99 After $100 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000040643-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              novaform 14 inch queen mattress
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/furniture"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $1,299.99 After $200 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1630963-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              thomasville langdon sectional
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $650 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1751993-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              lg 26 cubic foot refrigerator
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $320 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1418178-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              whirlpool top control dishwasher
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $69.99 After $10 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1794675-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              spafinder two $50 e gift cards
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $59.99 After $20 OFF
            </Text>
            <img
              src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1546146-847__1&recipeName=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              raw manuka honey 8.8 oz
            </Text>
          </SimpleGrid>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default Section1;
