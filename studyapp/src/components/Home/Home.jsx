import "./home.css";
import React from "react";
import vg from "../../assets/images/bg3.jfif";
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack, useColorMode } from "@chakra-ui/react";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { DiAws } from "react-icons/di";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { Link } from "react-router-dom";

// import introVideo from "../../assets/videos/intro.mp4"
const Home = () => {
  return <section className='home' >
    
    <div className="container" style={{paddingTop: "4"}} >
        <Stack 
        className='stack'
        direction={["column", "row"]}
        height={"100%"}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        spacing={['16', '56']}
        >
            <VStack marginTop={10} width={'full'} spacing={"5"} alignItems={["center", "flex-end"]}>
                <Heading children="LEARN MORE FROM EXPERTS" size={'2xl'} />
                <Text fontSize={"2xl"} fontFamily="cursive" textAlign={["center", "left"]} children="Find Valuable content At Reasonable Price" />
                <Link to="/courses" >
                    <Button size={"lg"} color={"aqua"} >
                        Explore Now
                    </Button>
                </Link>
            </VStack>

            <Image  className='vector-graphics' src={vg} objectFit={"contain"}  boxSize="md" borderRadius="full" />
        </Stack>
    </div>

    <Box padding={"8"} bg={"#526D82"}>
        <Heading textAlign={"center"} fontFamily={"body"} color={"#00ffff"} children="OUR BRANDS" />

        <HStack className='brandsBanner' justifyContent={"space-evenly"} >
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
        </HStack>

    </Box>

    <div className="container2">
        <video
        src={"https://cdn.pixabay.com/video/2023/04/15/159029-818026300_large.mp4"}
        autoPlay={true}
        controls={true}
        controlsList='nodownload nofullscreen noremoteplay'
        disablePictureInPicture={true}
        disableRemotePlayback={true}
        ></video>
        
    </div> 
  </section>
};

export default Home;
