import React from "react";
import data from "../../assets/docs/TermsAndConditions";
import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// import introVideo from "../../assets/videos/intro.mp4"
const Founder = () => (
    <Stack  border={"aqua"} direction={["column", "row"]} spacing={["8", "16"]} padding={"8"} >
        <VStack >
            <Avatar  src='' boxSize={["40", "48"]} />
            <Text size={"md"} children="Co-founder" opacity={0.7}  />
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
            <Heading children="Bishal Das" size={["md","xl"]} />
            <Text textAlign={["center", "left"]} children={`I am a full-stack developer. 
            Our mission is to provide quality content at reasonable price`} />
        </VStack>

        <VStack >
            <Avatar  src='' boxSize={["40", "48"]} />
            <Text size={"md"} children="Co-founder" opacity={0.7}  />
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
            <Heading children="Omkar Koli" size={["md","xl"]} />
            <Text textAlign={["center", "left"]} children={`I am a Back-End developer. 
            Our mission is to provide quality content at reasonable price`} />
        </VStack>
    </Stack>
    
    
)

const VideoPlayer = () => {
    return <Box>
        <video
        src={"https://cdn.pixabay.com/video/2021/01/03/61037-497754241_large.mp4"}
        autoPlay={true}
        muted={true}
        loop
        controls={true}
        controlsList='nodownload nofullscreen noremoteplay'
        disablePictureInPicture={true}
        disableRemotePlayback={true}
        ></video>
    </Box>

}
// let termsAndConditions="Terms and conditions"
const TandC = ({termsAndConditions}) => {
    return <Box>
        <Heading my={"4"} textAlign={["center", "left"]} size={"md"} children="Terms and Conditions" />
        <Box h="sm" p="4" overflowY={"scroll"} >
            <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center", "left"]} >{termsAndConditions}</Text>
            <Heading my={"4"} size={"xs"} children="Refund only applicable for cancellation in 7 days" />
        </Box>
    </Box>
}
const About = () => {
  return (
    <Container maxW={"container.lg"} padding={["12", "16"]} boxShadow={"lg"} >

        <Heading children="About Us" textAlign={["center", "left"]} />

        <Founder />
        <Stack m="8" direction={["column", "row"]} alignItems={"center"} >

            <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]} >
                We are a video streaming platform with some premium courses available only for premium users
            </Text>
            <Link to="/subscribe" >
                <Button color={"aqua"} >
                    Check Out our plan
                </Button>
            </Link>
        </Stack>
    
        <VideoPlayer />
        <TandC termsAndConditions={data} />
        <HStack my="4" p="4" >
            <RiSecurePaymentFill />
            <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children={"Payment is secured by Razorpay"} />
        </HStack>
    </Container>
  )
}

export default About
