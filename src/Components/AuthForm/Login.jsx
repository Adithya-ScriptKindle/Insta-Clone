import {Input,InputGroup,InputRightElement,Button} from '@chakra-ui/react';
import { useState } from 'react';
const Login = () => {
const [show, setShow] = useState(false);
const handleClick = () => setShow(!show);
const [inputs, setInputs] = useState({
    email: "",
    passowrd: "",
  });

  return (
    <>
    <Input
            placeholder="Enter email address"
            fontSize={14}
            cursor={"pointer"}
            value={inputs.email}
            type="email"
            size={"md"}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          ></Input>
          <InputGroup size="md">
            <Input
              fontSize={14}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              cursor={"pointer"}
              size={"md"}
              value={inputs.passowrd}
              onChange={(e) =>
                setInputs({ ...inputs, passowrd: e.target.value })
              }
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            Log In
          </Button>
    </>
  )
};

export default Login;