import {Flex} from "@chakra-ui/react";
import {FinalTestimonial, HeroImage, HeroText, LogoWithText, SingleFeature, Testimonial} from "../components/home.jsx";
import {useNavigate} from "react-router-dom";
import data from "../components/data.jsx";

const Home = () => {
    const navigate = useNavigate()
    return (
        <Flex flexDirection={'column'}>
            <LogoWithText
                logoText={data.logoText}
                handleClick={() => navigate('/')}
            />
            <HeroImage image={data.heroImage}/>
            <HeroText
                buttonText={data.heroText.buttonText}
                handleOnClick={() => navigate('/predict')}
                heading={data.heroText.heading}
                description={data.heroText.description}
            />
            <Testimonial
                image={data.testimonial.image}
                user={data.testimonial.user}
                feedback={data.testimonial.feedback}/>
            {data.features.map((item, index) =>
                <SingleFeature
                    key={index}
                    isLeft={item.isLeft}
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                />
            )}
            <FinalTestimonial
                image={data.finalTestimonial.image}
                user={data.finalTestimonial.user}
                feedback={data.finalTestimonial.feedback}
            />
        </Flex>
    )
}

export default Home