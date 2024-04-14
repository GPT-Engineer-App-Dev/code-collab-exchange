import { useState } from "react";
import { Box, Container, Heading, Input, Stack, Text, Wrap, WrapItem, Tag, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ContactModal from "../components/ContactModal";

const developers = [
  {
    id: 1,
    name: "John Smith",
    location: "United States",
    technologies: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    name: "Sarah Lee",
    location: "Canada",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
];

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevelopers = developers.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.location.toLowerCase().includes(searchTerm.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <Box py="12">
      <Container maxW="container.lg">
        <Stack spacing="8">
          <Heading as="h1">Developers for Hire</Heading>

          <Input placeholder="Search by name, location or technology..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

          <Wrap spacing="8">
            {filteredDevelopers.map((dev) => (
              <WrapItem key={dev.id} borderWidth="1px" borderRadius="lg" p="6">
                <Stack spacing="4">
                  <Stack spacing="1">
                    <Link as={RouterLink} to={`/developers/${dev.id}`}>
                      <Heading as="h2" size="md">
                        {dev.name}
                      </Heading>
                    </Link>
                    <Text>{dev.location}</Text>
                  </Stack>
                  <Wrap>
                    {dev.technologies.map((tech) => (
                      <Tag key={tech} size="md" colorScheme="blue">
                        {tech}
                      </Tag>
                    ))}
                  </Wrap>
                  <ContactModal developer={dev} />
                  <Text>{dev.location}</Text>
                  <Wrap>
                    {dev.technologies.map((tech) => (
                      <Tag key={tech} size="md" colorScheme="blue">
                        {tech}
                      </Tag>
                    ))}
                  </Wrap>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Container>
    </Box>
  );
};

export default Developers;
