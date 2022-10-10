import React, { useState } from "react";
import {
  Center,
  VStack,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { ColourModeSwitcher } from "../ColourModeSwitcher/colourModeSwitcher.js";
import IntroText from "../IntroText/introText.js";
import InitialFocus from "../Modal/modal.js";

export default function App() {
  return (
    <Center textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColourModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <IntroText />
          <Stack>
            <InitialFocus/>
          </Stack>
        </VStack>
      </Grid>
    </Center>
  );
}
