import {Button, CircularProgress, Flex, Heading, Image, Input, Text} from "@chakra-ui/react";
import {AddImage, Background, Close} from "../icons/Icons.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {loadImageFromBase64, loadImageFromUrl} from "./_services.js";

const PredictBackground = ({image}) => {
    return (
        <>
            <Flex
                position={'absolute'}
                top={'64px'}
                right={0}
                w={'23%'}
                h={'80vh'}
                bg={'gray.100'}
                opacity={'0.5'}
                roundedLeft={'3xl'}
            />
            <Background
                w={'536px'}
                h={'80%'}
                position={'absolute'}
                top={'100px'}
                right={'17%'}
                opacity={'0.1'}
            />
            <Image
                w={'50%'}
                h={'70%'}
                src={image}
                position={'absolute'}
                bottom={0}
                left={0}
            />
        </>
    )
}

const SingleText = ({my, heading, values}) => {
    return (
        <Flex w={'full'} mt={my} justify={'space-between'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {heading}
            </Heading>
            <Text fontWeight={800} fontSize={'xl'}>
                {values}
            </Text>
        </Flex>
    )
}

const ImagePreview = ({file, preview, handleOnClose}) => {
    const [prediction, setPrediction] = useState(null)

    useEffect(() => {
        if (file) predict(file)
    }, [file])

    const predict = async (file) => {
        try {
            const url = import.meta.env.VITE_PREDICTION_URL
            let formData = new FormData();
            formData.append('file', file);
            let response = await axios.post(url, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            if (response.status === 200) {
                setPrediction(response.data);
            }
        } catch (e) {
            console.error(e)
            handleOnClose()
            toast.error('Invalid Image Found.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                zIndex: 1,
            })
        }
    }

    return (
        <Flex
            p={6}
            w={'40%'}
            h={'80%'}
            bg={'white'}
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            boxShadow={'2xl'}
            rounded={'lg'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            _after={{
                content: '""',
                w: '55%',
                h: '60%',
                pos: 'absolute',
                top: '-5%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundImage: `url(${preview})`,
                filter: 'blur(20px)',
                zIndex: -1,
            }}
            zIndex={1}>
            <Image
                mt={-12}
                rounded={'lg'}
                height={350}
                width={350}
                objectFit={'cover'}
                src={preview}
            />
            <Close
                position={'absolute'}
                right={0}
                top={0}
                mt={4}
                mr={4}
                w={'36px'}
                h={'36px'}
                color={'gray.800'}
                onClick={handleOnClose}
            />
            {prediction ? (
                <>
                    <Heading mt={4} fontWeight={'900'}>Prediction</Heading>
                    <SingleText
                        my={16}
                        heading={'Label:'}
                        values={prediction?.class_name}
                    />
                    <SingleText
                        my={10}
                        heading={'Confidence:'}
                        values={`${prediction?.confidence}%`}
                    />
                </>
            ) : (
                <CircularProgress my={'100px'} isIndeterminate color="gray.400" size="36px"/>
            )}
        </Flex>
    )
}

const DragDropArea = () => {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [hover, setHover] = useState(false)
    const [url, setUrl] = useState('')

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]
        setFile(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleUrlInputChange = async () => {
        try {
            let tempUrl = url

            // Return if url is not set.
            if (!url) {
                handleOnClose()
                return
            }
            tempUrl = tempUrl.startsWith('data:image/') ? await loadImageFromBase64(tempUrl) : await loadImageFromUrl(tempUrl)
            setFile(tempUrl)
            setPreview(URL.createObjectURL(tempUrl))

        } catch (e) {
            console.error(e)
            handleOnClose()
            toast.error('Invalid Image Found.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                zIndex: 1,
            })
        }
    }

    const handleOnClose = () => {
        setFile(null)
        setUrl('')
        setPreview(null)
    }

    return file ? (
        <ImagePreview file={file} preview={preview} handleOnClose={handleOnClose}/>
    ) : (
        <Flex
            p={6}
            w={'40%'}
            h={'80%'}
            top={'50%'}
            left={'50%'}
            bg={'white'}
            boxShadow={'2xl'}
            borderRadius={'lg'}
            position={'absolute'}
            transform={'translate(-50%, -50%)'}
            flexDirection={'column'}
            alignItems={'center'}
            zIndex={1}
        >
            <Flex
                w={'100%'}
                flex={1}
                as={'label'}
                borderRadius={'lg'}
                cursor={'pointer'}
                textAlign={'center'}
                htmlFor={'fileInput'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={hover ? 'blue.50' : 'white'}
                border={file ? '4px solid' : '4px dashed'}
                borderColor={hover ? 'blue.200' : 'gray.600'}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <AddImage color={hover ? 'blue.400' : 'gray.400'} fontSize={'96px'}/>
                <Text
                    m={4}
                    fontSize={'3xl'}
                    fontStyle={'normal'}
                    lineHeight={1}
                    fontWeight={'900'}
                    letterSpacing={1}
                    color={hover ? 'blue.400' : 'gray.600'}
                >
                    Select an Image file to upload
                </Text>
                <Text
                    mt={8}
                    fontSize={'xl'}
                    fontStyle={'normal'}
                    lineHeight={1}
                    fontWeight={'500'}
                    letterSpacing={1}
                    color={'gray.400'}
                >
                    or drag and drop it here
                </Text>
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    style={{display: "none"}}
                />
            </Flex>
            <Flex
                mt={10}
                w={'full'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'start'}
            >
                <Text
                    fontSize={'lg'}
                    fontStyle={'normal'}
                    lineHeight={1}
                    fontWeight={'700'}
                    color={'#616367'}
                >
                    or upload from a URL
                </Text>
                <Text
                    ml={2}
                    fontSize={'lg'}
                    fontStyle={'normal'}
                    lineHeight={1}
                    fontWeight={'300'}
                    color={'#616367'}
                >
                    (Ongoing feature)
                </Text>
            </Flex>
            <Flex
                mt={5}
                p={1}
                w={'full'}
                h={'12'}
                bg={'#F9F9F9'}
                borderWidth={'1px'}
                borderColor={'#EBEBEB'}
                rounded={'lg'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
            >
                <Input
                    px={4}
                    variant={'unstyled'}
                    placeholder='Add the file URL'
                    size='md'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <Button
                    p={1}
                    px={5}
                    minW={'unset'}
                    color={'black'}
                    bg={'white'}
                    textAlign={'center'}
                    borderWidth={'1px'}
                    borderColor={'#EBEBEB'}
                    variant={'unstyled'}
                    _hover={{
                        bg: '#F9F9F9',
                    }}
                    onClick={handleUrlInputChange}
                >
                    Upload
                </Button>
            </Flex>
        </Flex>
    )
}

export {
    DragDropArea,
    PredictBackground
}