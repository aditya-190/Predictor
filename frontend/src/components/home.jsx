import {Avatar, Button, Flex, Image, Text} from "@chakra-ui/react";
import {Background, Logo} from "../icons/Icons.jsx";

const LogoWithText = ({logoText, handleClick}) => {
    return (
        <Flex
            ml={'48px'}
            mt={'124px'}
            flexDirection={'row'}
            alignItems={'center'}
            cursor={'pointer'}
            onClick={handleClick}
        >
            <Logo fontSize={'6xl'}/>
            <Text
                ml={2}
                fontWeight={'700'}
                fontSize={'4xl'}
            >
                {logoText}
            </Text>
        </Flex>
    )
}

const HeroImage = ({image}) => {
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
                w={'536px'}
                h={'544px'}
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
                src={image}
                alt={'Leaf Predictor'}
            />
        </>
    )
}

const HeroText = ({heading, description, buttonText, handleOnClick}) => {
    return (
        <Flex ml={'48px'} flexDirection={'column'}>
            <Text
                mt={'82px'}
                maxW={'50%'}
                fontSize={'8xl'}
                fontStyle={'normal'}
                lineHeight={1}
                fontWeight={'900'}
                color={'#111827'}
            >
                {heading}
            </Text>
            <Text
                mt={'24px'}
                maxW={'50%'}
                fontSize={'3xl'}
                fontStyle={'normal'}
                lineHeight={'3xl'}
                fontWeight={'400'}
                color={'#6B7280'}
            >
                {description}
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
                onClick={handleOnClick}
            >
                {buttonText}
            </Button>
        </Flex>
    )
}

const Testimonial = ({image, user, feedback}) => {
    return (
        <Flex
            w={'50%'}
            ml={'48px'}
            mt={10}
            mb={'132px'}
            flexDirection={'row'}
            alignItems={'center'}
        >
            <Avatar
                size='lg'
                name='Aditya Bhardwaj'
                src={image}
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
                    {feedback}
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
                    {user}
                </Text>
            </Flex>
        </Flex>
    )
}

const SingleFeature = ({heading, description, image, isLeft = true}) => {
    return (
        <Flex mt={'130px'} h={'80vh'} flexDirection={isLeft ? 'row' : 'row-reverse'}>
            <Image
                w={'50%'}
                h={'450px'}
                roundedLeft={isLeft ? 0 : '3xl'}
                roundedRight={isLeft ? '3xl' : 0}
                objectFit="cover"
                src={image}
                alt={'Leaf Predictor'}
            />
            <Flex
                w={'50%'}
                pr={isLeft ? 10 : 0}
                pl={isLeft ? 0 : 10}
                ml={isLeft ? 8 : 0}
                mr={isLeft ? 0 : 8}
                letterSpacing={1.25}
                flexDirection={'column'}
            >
                <Text
                    mt={'92px'}
                    fontSize={'7xl'}
                    fontStyle={'normal'}
                    lineHeight={1}
                    fontWeight={'900'}
                    color={'#111827'}
                >
                    {heading}
                </Text>
                <Text
                    mt={'24px'}
                    fontSize={'2xl'}
                    fontFamily={'Roboto'}
                    fontStyle={'normal'}
                    fontWeight={'400'}
                    color={'#6B7280'}
                >
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

const FinalTestimonial = ({image, user, feedback}) => {
    return (
        <Flex
            maxH={'400px'}
            mb={24}
            flexDirection={'column'}
            overflow={'hidden'}
        >
            <Flex
                w={'100%'}
                minH={'400px'}
                py={24}
                bg={'rgba(37, 50, 56, 0.8)'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
            >
                <Text
                    w={'full'}
                    color={'white'}
                    fontSize={'5xl'}
                    fontWeight={'900'}
                    fontStyle={'normal'}
                    lineHeight={'6xl'}
                    letterSpacing={1.25}
                    whiteSpace={'pre-wrap'}
                >
                    {feedback}
                </Text>
                <Flex
                    mt={10}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Avatar
                        size='md'
                        name='Aditya Bhardwaj'
                        src={image}
                        border={'2px'}
                        borderColor={'white'}
                    />
                    <Text
                        ml={4}
                        w={'full'}
                        fontSize={'xl'}
                        fontStyle={'normal'}
                        fontWeight={'500'}
                        letterSpacing={1}
                        color={'white'}
                    >
                        {user}
                    </Text>
                </Flex>
            </Flex>
            <Background
                w={'500px'}
                h={'500px'}
                position={'relative'}
                bottom={0}
                left={0}
                opacity={'0.8'}
                overflow={'hidden'}
                transform={'translate(-45%, -45%) rotate(3deg);'}
            />
        </Flex>
    )
}

export {
    FinalTestimonial,
    LogoWithText,
    HeroImage,
    HeroText,
    SingleFeature,
    Testimonial,
}