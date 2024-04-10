import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const FromPage = ({ HandleSubmitButton, setName, name }) => {
  return (
    <div style={{ width: "45vw" }}>
      <Heading mb={5} fontSize={"4xl"} textAlign={"center"}>
        FromPage
      </Heading>
      &nbsp;
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={4}>
          <HStack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={name}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={HandleSubmitButton}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </HStack>
        </Stack>
      </div>
    </div>
  );
};

export default FromPage;
