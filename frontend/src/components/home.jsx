import {Avatar, Button, Flex, Image, Text} from "@chakra-ui/react";
import {Background, Logo} from "../icons/Icons.jsx";
import {useNavigate} from "react-router-dom";

const LogoWithText = () => {
    return (
        <Flex mt={'124px'} flexDirection={'row'} alignItems={'center'}>
            <Logo fontSize={'6xl'}/>
            <Text
                ml={2}
                fontWeight={'700'}
                fontSize={'4xl'}
                fontFamily={'Roboto'}
            >
                Leaf Prediction
            </Text>
        </Flex>
    )
}

const HeroImage = () => {
    return (
        <>
            <Flex
                position={'absolute'}
                top={'64px'}
                right={0}
                w={'23%'}
                h={'150vh'}
                bg={'gray.100'}
                opacity={'0.5'}
                roundedLeft={'3xl'}
            />
            <Background
                position={'absolute'}
                top={'100px'}
                right={'17%'}
                opacity={'0.1'}
            />
            <Image
                w={'50%'}
                h={'456px'}
                roundedLeft={'3xl'}
                objectFit="cover"
                position={'absolute'}
                right={0}
                top={'50%'}
                src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt={'Leaf Predictor'}
            />
        </>
    )
}

const HeroText = () => {
    const navigate = useNavigate()
    return (
        <>
            <Text
                mt={'82px'}
                maxW={'50%'}
                fontSize={'8xl'}
                fontFamily={'Roboto'}
                fontStyle={'normal'}
                lineHeight={1}
                fontWeight={'900'}
                color={'#111827'}
            >
                Predict leaf health with AI-powered accuracy.
            </Text>
            <Text
                mt={'24px'}
                maxW={'50%'}
                fontSize={'3xl'}
                fontFamily={'Roboto'}
                fontStyle={'normal'}
                lineHeight={'3xl'}
                fontWeight={'400'}
                color={'#6B7280'}
            >
                Quickly identify leaf health and protect your crops with our intuitive leaf classification tool.
            </Text>
            <Button
                p={0}
                py={4}
                mt={10}
                w={'25%'}
                h={'full'}
                rounded={'full'}
                fontSize={'lg'}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{
                    bg: 'orange.500',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                onClick={() => navigate('/predict')}
            >
                Predict Now
            </Button>
        </>
    )
}

const Testimonial = () => {
    return (
        <Flex
            w={'50%'}
            mt={10}
            mb={'132px'}
            flexDirection={'row'}
            alignItems={'center'}
        >
            <Avatar
                size='lg'
                name='Aditya Bhardwaj'
                src='https://avatars.githubusercontent.com/u/63164037?v=4'
            />
            <Flex ml={6} flexDirection={'column'}>
                <Text
                    w={'full'}
                    fontSize={'2xl'}
                    fontStyle={'normal'}
                    lineHeight={'3xl'}
                    fontWeight={'900'}
                    color={'#111827'}
                    whiteSpace={'pre-wrap'}
                >
                    “I have been using Leaf Prediction for the past weeks {'\n'} and it has revolutionized the way I
                    manage my farm. {'\n'} Very reliable tool.”
                </Text>
                <Text
                    mt={2}
                    w={'full'}
                    fontSize={'lg'}
                    fontStyle={'normal'}
                    lineHeight={'3xl'}
                    fontWeight={'700'}
                    letterSpacing={'4px'}
                    color={'#6B7280'}
                >
                    Aditya Bhardwaj
                </Text>
            </Flex>
        </Flex>
    )
}

export {
    LogoWithText,
    HeroImage,
    HeroText,
    Testimonial
}