import React from "react";
import { Formik } from "formik";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Textarea,
    ModalCloseButton,
    FormLabel,
    Input,
    FormControl,
    useDisclosure,
    Button,
  } from "@chakra-ui/react";

/**
 * General modal popups for the different data conversions
 * @param {Object} props contains strings with instructions on what to show
 * @returns {React Component} one all purpose modal that can be modified for different props
 */
 function callAPI(formdata) {
    console.log(formdata)
    fetch("http://localhost:8000/api/comment/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        alert(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const label = 'comment'
    return (
      <>
        <Button
              colorScheme="pink"
              variant="outline"
              onClick= {onOpen}
            >
              Оставить отзыв
            </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Что вы думаете о GeekBrains?</ModalHeader>
            <ModalCloseButton />
            <Formik
      initialValues={{ comment: "" }}
      onSubmit={(values, { setSubmitting }) => {
        callAPI(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <Input 
                placeholder='Ваше имя' 
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel></FormLabel>
                <Textarea 
                placeholder='Ваш отзыв'
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button 
                colorScheme="teal"
                disabled={isSubmitting}
                type="submit">
                Готово
              </Button>
              <Button onClick={onClose}>Отмена</Button>
            </ModalFooter>
            </form>
        )}
        </Formik>
          </ModalContent>
        </Modal>
      </>
    )
  }