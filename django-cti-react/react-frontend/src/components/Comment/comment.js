import {
    Heading,
    Text,
    Stack,
    Box
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";

  export default function Comment() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        fetch("http://localhost:8000/api/comment/") 
        .then((response) => {
          return response.json();
        })
        .then((actualData) => {
          console.log(actualData);
          setData(actualData)
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    return (
         
            <Stack direction='row' h='100px' p={4}>
                {data && data.map(({ id, name, comment }) => (
                    <Box boxShadow='base' p='20' rounded='md' bg='white'>
                        <Heading mb={2}>{name}</Heading>
                        <Text fontSize='xl'>{comment}</Text>
                    </Box>
                ))}
            </Stack>
    );
  }