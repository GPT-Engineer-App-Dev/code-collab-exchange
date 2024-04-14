import { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactModal = ({ developer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {developer.name}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              {isSubmitted ? (
                <div>Message sent!</div>
              ) : (
                <>
                  <FormControl isReadOnly>
                    <FormLabel>Name</FormLabel>
                    <Input value={developer.name} />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Your Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Your Name</FormLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                  </FormControl>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3}>
                Close
              </Button>
              {!isSubmitted && (
                <Button type="submit" colorScheme="blue">
                  Send
                </Button>
              )}
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
