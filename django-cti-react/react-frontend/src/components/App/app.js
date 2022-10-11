import React, { useState } from "react";
import {
  Center,
  VStack,
  Grid,
  Stack,
  Container,
  Box,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ColourModeSwitcher } from "../ColourModeSwitcher/colourModeSwitcher.js";
import IntroText from "../IntroText/introText.js";
import InitialFocus from "../Modal/modal.js";
import GridBlurredBackdrop from "../Testimonials/testimonials.js";
/**
 * The App! Starts here with different buttons to trigger conversion formats, which then go to modals
 * and then onto popovers before communciating with the backend
 * @returns App Component!
 */
export default function App() {
  return (
    <Container maxW={'3xl'}>
    <ColourModeSwitcher justifySelf="flex-end" />
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        <IntroText />
        <InitialFocus/>
      </Heading>
        <GridBlurredBackdrop/>
      </Stack>
  </Container>
);
}
