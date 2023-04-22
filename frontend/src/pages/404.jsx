import {Flex} from "@chakra-ui/react";
import {GoHome, Text404} from "../icons/Icons.jsx";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Flex
            pt={20}
            w={'100vw'}
            h={'100vh'}
            bg={'#FFF2F2'}
            flexDirection={'column'}
            justifyContent={'start'}
            alignItems={'center'}
        >
            <Text404 w={'70vw'} h={'70vh'} />
            <GoHome
                w={'8vw'}
                h={'8vh'}
                ml={20}
                bottom={20}
                position={'absolute'}
                cursor={'pointer'}
                onClick={() => navigate('/')}
            />
        </Flex>
    )
}

export default NotFound