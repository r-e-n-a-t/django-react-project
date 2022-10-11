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
    createStandaloneToast,
    Button,
  } from "@chakra-ui/react";

/**
 * General modal popups for the different data conversions
 * @param {Object} props contains strings with instructions on what to show
 * @returns {React Component} one all purpose modal that can be modified for different props
 */
 function callAPI(formdata) {
    console.log(formdata)
    const toast  = createStandaloneToast()
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
        if (response.id) {toast({
          title: 'Отзыв добавлен.',
          description: 'Мы добавили Ваш отзыв на сайт.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })}
        else {toast({
          title: 'Отзыв не добавлен.',
          description: 'Все поля должны быть заполненными.',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })}
        // alert(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);        
        toast({
        title: 'Ошибка.',
        description: 'Мы не смогли добавить ваш отзыв.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        })
      });
  }

  export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button
          // align="center"
          colorScheme="purple"
          variant="outline"
          onClick={onOpen}
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
                colorScheme="purple"
                m={2}
                disabled={isSubmitting}
                type="submit"
                variant="outline"
                onClick={onClose}>
                Готово
              </Button>
              <Button 
              onClick={onClose}
              variant="outline">
                Отмена</Button>
            </ModalFooter>
            </form>
        )}
        </Formik>
          </ModalContent>
        </Modal>
      </>
    )
  }