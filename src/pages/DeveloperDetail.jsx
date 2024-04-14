import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const DeveloperDetail = () => {
  const { id } = useParams();

  return (
    <Box py="12">
      <Container maxW="container.lg">
        <Heading as="h1">Developer {id}</Heading>
        <Text>Developer details page coming soon!</Text>
      </Container>
    </Box>
  );
};

export default DeveloperDetail;
