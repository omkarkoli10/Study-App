import React from "react";
import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return <Box  padding={"4"} bg={'#65849b'} minH={"10vh"}  >
    <Stack direction={["column", 'row']} >
        <VStack alignItems={["center"]} width={"full"} >
            <Heading children="All Rights Reserved @2025 Studymate App" color={"#424242"} />
        </VStack>

        <HStack spacing={["2", "10"]} fontSize={"50"} justifyContent={"center"} >
            <a href="https://youtube.com" target='_blank'>
                <TiSocialYoutubeCircular />
            </a>
            <a href="https://youtube.com" target='_blank'>
                <TiSocialInstagramCircular />
            </a>
            <a href="https://youtube.com" target='_blank'>
                <TiSocialGithubCircular />
            </a>
        </HStack>

    </Stack>
  </Box>
}

export default Footer
