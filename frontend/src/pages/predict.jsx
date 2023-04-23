import {Flex} from "@chakra-ui/react";
import {LogoWithText} from "../components/home.jsx";
import data from "../components/data.jsx";
import {useNavigate} from "react-router-dom";
import {DragDropArea, PredictBackground} from "../components/predict.jsx";

const Predict = () => {
    const navigate = useNavigate()
    return (
        <Flex flexDirection={'column'}>
            <LogoWithText
                logoText={data.logoText}
                handleClick={() => navigate('/')}
            />
            <PredictBackground image={data.heroImage}/>
            <DragDropArea />
        </Flex>
    )
}

export default Predict