import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState } from "react";

const CartPage = () => {
  let arr = JSON.parse(localStorage.getItem("cart"));
  const [rerender, setRerender] = useState(false);
  const toast = useToast();

  const calculateTotal = () => {
    if (!arr || arr.length === 0) return 0;
    return arr
      .reduce((total, item) => Number(total) + Number(item.Price), 0)
      .toFixed(2);
  };

  let handleCheckout = () => {
    localStorage.removeItem("cart");
    setRerender(!rerender);
    let cartObj = {
      title: "Checkout Completed Successfully",
      description: `Cart is Empty Now!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    };
    toast(cartObj);
  };

  let handleRemove = (id) => {
    const updatedCart = arr.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setRerender(!rerender);
    let cartObj = {
      title: "Item Removed From Cart",
      description: `Successful`,
      status: "error",
      duration: 9000,
      isClosable: true,
    };
    toast(cartObj);
  };

  return (
    <Box>
      <Header />
      <Box p={[5, 5, 10, 20]} pt={[5, 5, 5, 5]}>
        <Heading fontWeight={400}>Cart</Heading>

        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "2fr 1fr",
            "2fr 1fr",
          ]}
          alignItems={"start"}
        >
          <SimpleGrid gap={2}>
            {arr ? (
              arr.map((elem) => (
                <Box key={elem.id} p={5}>
                  <Divider mb={10} bg={"grey"} h={0.8} />
                  <SimpleGrid
                    gridTemplateColumns={[
                      "repeat(1,1fr)",
                      "repeat(1,1fr)",
                      "repeat(1,1fr)",
                      "repeat(2,1fr)",
                    ]}
                    gap={5}
                  >
                    <SimpleGrid
                      gridTemplateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                        "repeat(2,1fr)",
                      ]}
                    >
                      <Box w={40}>
                        <img src={elem.image} alt="" />
                      </Box>
                      <Box>
                        <Text color={"blue"} fontWeight={400}>
                          {elem.title}
                        </Text>
                        <Text fontWeight={400} fontSize={"13px"} mb={3}>
                          ID:{elem.id}
                        </Text>
                        <Text fontWeight={400} mb={5}>
                          ${elem.Price}
                        </Text>
                        <Text
                          color={"blue"}
                          _hover={{ textDecoration: "underline" }}
                          fontWeight={400}
                          cursor={"pointer"}
                          onClick={() => handleRemove(elem.id)}
                        >
                          Remove
                        </Text>
                      </Box>
                    </SimpleGrid>
                    <Flex>
                      <SimpleGrid gap={2} m={"auto"}>
                        <Box p={2} border={"1px solid rgba(0,0,0,0.2)"}>
                          <Text mb={2} fontWeight={600}>
                            Standard : Shipping & Handling Included
                          </Text>
                          <Text fontWeight={300} fontSize={"12px"}>
                            Estimated Delivery
                          </Text>
                          <Text fontWeight={600} color={"green"}>
                            5 to 6 Days
                          </Text>
                        </Box>

                        <Box p={2} border={"1px solid rgba(0,0,0,0.2)"}>
                          <Text mb={2} fontWeight={600}>
                            Express 1 to 2 Business Days : $3.96
                          </Text>
                          <Text fontWeight={300} fontSize={"12px"}>
                            Estimated Delivery
                          </Text>
                          <Text fontWeight={600} color={"green"}>
                            2 to 3 Days
                          </Text>
                        </Box>

                        <Text
                          color={"blue"}
                          _hover={{ textDecoration: "underline" }}
                          fontWeight={400}
                          cursor={"pointer"}
                        >
                          Delivery Details
                        </Text>
                      </SimpleGrid>
                    </Flex>
                  </SimpleGrid>
                </Box>
              ))
            ) : (
              <Box mt={5}>
                <Divider mb={10} bg={"grey"} h={0.8} />

                <Text fontSize={"18px"} fontWeight={400} mb={3}>
                  Your shopping cart is empty. Please add at least one item to
                  your cart before checking out.
                </Text>
                <Link to={"/"}>
                  <Button
                    mb={4}
                    _hover={{ color: "white" }}
                    bg={"#296293"}
                    color={"white"}
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Divider mb={10} bg={"grey"} h={0.8} />
              </Box>
            )}
          </SimpleGrid>

          <SimpleGrid gap={8} p={5}>
            <Box p={4} border={"1px solid rgba(0,0,0,0.3)"}>
              <Text
                color={"blue"}
                _hover={{ textDecoration: "underline" }}
                mb={3}
              >
                EARN 2% CASH BACK REWARDS at Costco warehouses or at Costco.com
                with the Costco Anywhere Visa® Card by Citi
              </Text>
              <Text fontSize={"11px"} fontWeight={400} mb={3}>
                4% on eligible gas and EV charging for the first $7,000 per
                year, then 1% thereafter 3% on restaurants and eligible travel
                1% on everything else
              </Text>
              <Button color={"blue"} w={"100%"} fontWeight={400}>
                Apply Now
              </Button>
            </Box>

            <Box p={4} fontWeight={400} border={"1px solid rgba(0,0,0,0.3)"}>
              <Flex mb={4} justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>${calculateTotal()}</Text>
              </Flex>
              <Flex mb={3} fontSize={"14px"} justifyContent={"space-between"}>
                <Text>Shipping & Handling for 98101</Text>
                <Text>$0.00</Text>
              </Flex>
              <Divider mb={3} bg={"grey"} />
              <Flex mb={4} justifyContent={"space-between"} fontSize={"18px"}>
                <Text>Estimated Total</Text>
                <Text>${calculateTotal()}</Text>
              </Flex>
              <Text mb={2} fontSize={"14px"} color={"rgb(112,112,112)"}>
                Applicable taxes will be calculated at checkout.
              </Text>
              <Button
                color={"white"}
                _hover={{ color: "white" }}
                w={"100%"}
                fontWeight={400}
                bg={"green"}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default CartPage;
