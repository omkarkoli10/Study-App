import { Container, Heading, Input, VStack, FormLabel, Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
  return <Container h={"95vh"} >
    <VStack h={"full"} justifyContent={"center"} spacing={"16"} >

        <Heading children="Welcome to studyApp" />

        <form style={{width: "100%"}} >
            <Box my={"4"} >
                <FormLabel htmlFor="email" children="Email Address" />
                <Input required id='email' value={email} placeholder='abc@gmail.com' onChange={ e => setEmail(e.target.value) } focusBorderColor='cyan' />
            </Box>
            <Box my={"4"} >
                <FormLabel htmlFor="password" children="Password" />
                <Input required id='password'  placeholder="Enter your password" value={password}  onChange={ e => setPassword(e.target.value) } focusBorderColor='cyan' />
            </Box>
            <Box my={"4"} >
                <Link to={"/forgetpassword"} >
                    <Button fontSize={"sm"} variant={"link"} >Forget Password?</Button>
                </Link>
            </Box>
            <Button width={["100%", "auto"]} my={"4"} colorScheme='cyan' type='submit' >Login</Button>

            <Box my={"4"} >
                New User? <Link to={"/register"} >
                    <Button   size='sm' color='cyan' variant={"ghost"} >Sign Up</Button>
                    here!
                </Link>
            </Box>
        </form>

    </VStack>
  </Container>
}

export default Login
