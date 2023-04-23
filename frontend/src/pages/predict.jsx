import {Flex} from "@chakra-ui/react";
import {LogoWithText} from "../components/home.jsx";
import data from "../components/data.jsx";
import {useNavigate} from "react-router-dom";

const Predict = () => {
    const navigate = useNavigate()
    return (
        <Flex flexDirection={'column'}>
            <LogoWithText
                logoText={data.logoText}
                handleClick={() => navigate('/')}
            />
        </Flex>
    )
}

export default Predict