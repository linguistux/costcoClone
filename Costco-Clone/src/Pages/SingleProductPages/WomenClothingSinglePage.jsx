import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import productData from "../../JSON/womenClothPage.json";
import { useEffect } from 'react';




const WomenClothingSinglePage = () => {
    const { id } = useParams();


    const selectedItem = productData.find(item => item.id === parseInt(id));
  
    if (!selectedItem) {
      return <div>Product not found!</div>;
    }
  
    const { image, title, Price, Description } = selectedItem;

    function handleCart(){
      let arr= JSON.parse(localStorage.getItem("cart")) || []
      arr.push(selectedItem)
      localStorage.setItem("cart",JSON.stringify(arr))
    }

    useEffect(()=>{
      window.scroll({
        top:0,
        behavior:'instant'
      })
    },[])


    return (
      <Box>
  
  <Header/>
       
       
       <SimpleGrid gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)',]} gap={20} p={[5,5,10,20]} w={'80%'} m={'auto'}>
        <SimpleGrid  justifyContent={'center'} border={'1px solid rgba(0,0,0,0.2)'} p={10}>
          <img src={"../../"+image} alt="Image" />
        </SimpleGrid>
        <SimpleGrid >
          <Text fontSize={'20px'} fontWeight={400} mb={10}>{title}</Text>
          <Flex justifyContent={'space-between'} mb={5}>
          <Text fontWeight={400} fontSize={'20px'}>Your Price</Text>
          <Text fontWeight={400} fontSize={'20px'}>${Price}</Text>
          </Flex>
          <Box mb={20}>
            {Description}
          </Box>
          <Button bg={'#296293'} color={'white'} _hover={{color:"white"}} onClick={handleCart}>Add to Cart</Button>
        </SimpleGrid>
       </SimpleGrid>
        <Footer />
      </Box>
    );
}

export default WomenClothingSinglePage