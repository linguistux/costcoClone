import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="src\assets\HomeIMG\d_24w09031_banner_backyard_oasis.jpg"
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
              src="src\assets\HomeIMG\Section1\imageService (7).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (6).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (5).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (4).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (3).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (2).jpeg"
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
              src="src\assets\HomeIMG\Section1\imageService (1).jpeg"
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
            <img src="src\assets\HomeIMG\Section1\imageService.jpeg" alt="" />
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
