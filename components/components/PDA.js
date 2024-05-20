import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const ShowPDA = ({ prob2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageSrc = prob2 ? "/images/PDA2.jpg" : "/images/PDA1.jpg";
  const imageAlt = prob2
    ? "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*"
    : "(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)";

  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show PDA</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["37em", null, "36em", null, null, "36em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">
            Pushdown Automaton
          </PopoverHeader>
          <PopoverBody align="center">
            <Box mx="auto" my="2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                cursor="pointer"
                onClick={onOpen}
              />
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{imageAlt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imageSrc} alt={imageAlt} mx="auto" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowPDA;
