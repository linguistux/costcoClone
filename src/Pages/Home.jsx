import { Box } from "@chakra-ui/react";
import Header from "../Components/Header";
import SimpleSlider from "../Components/Homepage/Slider";
import Section1 from "../Components/Homepage/Section1";
import Section2 from "../Components/Homepage/Section2";
import Section3 from "../Components/Homepage/Section3";
import Footer from "../Components/Footer";
import MultipleItems from "../Components/Homepage/MultipleItemsSlider";
import Section4 from "../Components/Homepage/Section4";

const Home = () => {
  return (
    <Box>
      <Header />
      <SimpleSlider />
      <Section1 />
      <Section2 />
      <Section3 />
      <MultipleItems />
      <Section4 />
      <Footer />
    </Box>
  );
};

export default Home;
