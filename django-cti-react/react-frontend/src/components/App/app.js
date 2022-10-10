import React, { useState } from "react";
import {
  Center,
  VStack,
  Grid,
  Stack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ColourModeSwitcher } from "../ColourModeSwitcher/colourModeSwitcher.js";
import IntroText from "../IntroText/introText.js";
import InitialFocus from "../Modal/modal.js";

/**
 * The App! Starts here with different buttons to trigger conversion formats, which then go to modals
 * and then onto popovers before communciating with the backend
 * @returns App Component!
 */
export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState({
    title: "",
    body: "",
    uploadInstruction: "",
  });
  return (
    <Center textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColourModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <IntroText />
          <Stack>
            {/* <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => {
                onOpen();
                setText({
                  title: "Оставить комментарий",
                  body: "1Скажите, что вы думаете о Волчеке и GeekBrains?",
                  uploadInstruction: "Готово!",
                });
              }}
            >
              Оставить
            </Button> */}

            <InitialFocus/>
            {/* <GeneralConversionModal
              isOpen={isOpen}
              onClose={onClose}
              title={text.title}
              body={text.body}
              uploadInstruction={text.uploadInstruction}
            /> */}
          </Stack>
        </VStack>
      </Grid>
    </Center>
  );
}
