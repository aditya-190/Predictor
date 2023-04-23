import {Flex} from "@chakra-ui/react";
import {HeroImage, HeroText, LogoWithText, Testimonial} from "../components/home.jsx";

const Home = () => {
    return (
        <Flex ml={'48px'} flexDirection={'column'}>
            <LogoWithText/>
            <HeroImage/>
            <HeroText/>
            <Testimonial/>
        </Flex>
    )
}

export default Home