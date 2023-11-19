
// import React, { useState } from "react";
// import {auth} from "./Firebase"
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {
//   Flex,
//   Heading,
//   Input,
//   Button,
//   InputGroup,
//   Stack,
//   InputLeftElement,
//   chakra,
//   Box,
//   Link,
//   Avatar,
//   FormControl,
//   FormHelperText,
//   InputRightElement
// } from "@chakra-ui/react";
// import { FaUserAlt, FaLock } from "react-icons/fa";
// import Discover from "../Image/NavBG1.PNG"
// import { useNavigate } from "react-router-dom";

// const CFaUserAlt = chakra(FaUserAlt);

// const CFaLock = chakra(FaLock);
// const LoginComp = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate =useNavigate();

  
//   const handleLogin = async (e) => {
//    e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword (
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       alert(`Welcome ${user.email}`)
//       console.log(user.email);
//       navigate(`/`)
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert('Wrong Credential')
//     }
//   };

// return (
//   <Flex bgImage={Discover}
//     flexDirection="column"
//     width="100wh"
//     height="100vh"
//     backgroundColor="gray.200"
//     justifyContent="center"
//     alignItems="center"
//   >
//     <Stack
//       flexDir="column"
//       mb="2"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Avatar bg="orange.400" />
//       <Heading color="orange.400">Welcome</Heading>
//       <Box minW={{ base: "90%", md: "468px" }}>
//         <form onSubmit={handleLogin}>
//           <Stack
//             spacing={4}
//             p="1rem"
//             backgroundColor="whiteAlpha.900"
//             boxShadow="md"
//           >
//             <FormControl>
//               <InputGroup>
//                 <InputLeftElement
//                   pointerEvents="none"
//                   children={<CFaUserAlt color="gray.300" />}
//                 />
//                 <Input type="email" placeholder="email address" 
//                           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//                 />
//               </InputGroup>
//             </FormControl>
//             <FormControl>
//               <InputGroup>
//                 <InputLeftElement
//                   pointerEvents="none"
//                   color="gray.300"
//                   children={<CFaLock color="gray.300" />}
//                 />
//                 <Input
//                   // type={showPassword ? "text" : "password"}
//                   value={password}
//           onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                 />
//                 <InputRightElement width="4.5rem">
                
//                 </InputRightElement>
//               </InputGroup>
//               <FormHelperText textAlign="right">
//                 <Link href="https://support.google.com/accounts/answer/7682439?hl=en">forgot password?</Link>
//               </FormHelperText>
//             </FormControl>
      
//             <Button 
//               borderRadius={0}
//               type="submit"
//               variant="solid"
//               colorScheme="orange"
//               width="full"
//             >
//               Login
//             </Button>
        
//           </Stack>
//         </form>
//       </Box>
//     </Stack>
//     <Box style={{color:"white"}}>
//       New to us?{" "}
//       <Link color="orange.400" href="/signup">
//         Sign Up
//       </Link>
//     </Box>
//   </Flex>
// );
// };

// export default LoginComp;

// <------------------------ By using Firebase Authentication End------------------------>


import React, { useState } from "react";
import axios from "axios"

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Discover from "../Image/NavBG1.PNG"
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);

const CFaLock = chakra(FaLock);
const LoginComp = () => {

const [form,setForm]=useState({
  Email:"",
  Password:""
})

  const navigate =useNavigate();

  const Handlechange=(e)=>{
     e.preventDefault();
     const { name, value } = e.target;
     setForm({
       ...form,
       [name]: value
     });
  }

  const handleLogin = async (e) => {
   e.preventDefault();
    try {
     const resp=await axios.post(`http://localhost:1012/Login`,form);
      navigate(`/`)
    } catch (error) {
      console.error("Signup error:", error);
      alert('Wrong Credential')
    }
  };

return (
  <Flex bgImage={Discover}
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="orange.400" />
      <Heading color="orange.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={handleLogin}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="email address" 
                         name="Email"
                          value={form.Email}
          onChange={Handlechange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  // type={showPassword ? "text" : "password"}
                  name="Password"
                  value={form.Password}
                  onChange={Handlechange}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link href="https://support.google.com/accounts/answer/7682439?hl=en">forgot password?</Link>
              </FormHelperText>
            </FormControl>
      
            <Button 
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="orange"
              width="full"
            >
              Login
            </Button>
        
          </Stack>
        </form>
      </Box>
    </Stack>
    <Box style={{color:"white"}}>
      New to us?{" "}
      <Link color="orange.400" href="/signup">
        Sign Up
      </Link>
    </Box>
  </Flex>
);
};

export default LoginComp;