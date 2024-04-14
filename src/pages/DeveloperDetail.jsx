import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { developers } from "../data";
import ContactModal from "../components/ContactModal";

const DeveloperDetail = () => {
  const { id } = useParams();
  const developer = developers.find((dev) => dev.id === Number(id));

  return (
    <Box py="12">
      <Container maxW="container.lg">
        <Heading as="h1">{developer.name}</Heading>
        <Text fontSize="xl">{developer.location}</Text>
        <Text fontSize="lg" fontWeight="bold" mt="6">
          Technologies:
        </Text>
        <Text>{developer.technologies.join(", ")}</Text>
        <Text fontSize="lg" fontWeight="bold" mt="6">
          About:
        </Text>
        <Text>{developer.bio}</Text>
        <ContactModal developer={developer} />
      </Container>
    </Box>
  );
};

export default DeveloperDetail;
