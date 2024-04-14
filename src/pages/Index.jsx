import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaGlobe, FaSearch, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" borderBottomWidth="1px" py="4">
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            {/* Logo */}
            <Heading as="h1" color="blue.600" fontSize="2xl" fontWeight="bold">
              Particles
            </Heading>
            {/* Nav Links */}
            <HStack as="nav" spacing="8">
              <Link href="/developers" fontWeight="medium">
                Developers
              </Link>
              <Link href="/about" fontWeight="medium">
                About
              </Link>
              <Link href="/contact" fontWeight="medium">
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Box as="section" bg="gray.50" py="24">
        <Container maxW="container.lg">
          <Stack align="center" spacing="10" textAlign="center">
            <Stack spacing="4">
              <Heading as="h2" fontSize={["4xl", "5xl"]} fontWeight="extrabold">
                Hire Top Software Developers
              </Heading>
              <Text color="gray.500" fontSize={["lg", "xl"]} maxW="container.md" mx="auto">
                Particles is the best place to find elite software developers specializing in the latest web technologies.
              </Text>
            </Stack>
            <Button as={Link} href="/developers" colorScheme="blue" size="lg" rightIcon={<FaSearch />}>
              Find Developers
            </Button>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Developers" objectFit="cover" />
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Box as="section" py="24">
        <Container maxW="container.lg">
          <Stack spacing="16">
            <Heading as="h3" fontSize="3xl" textAlign="center">
              Why Hire on Particles?
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing="8">
              <Feature title="Top Developers" description="We thoroughly vet all developers to ensure they are highly skilled and experienced." icon={<FaStar />} />
              <Feature title="Search by Tech" description="Easily find developers who specialize in the languages and frameworks you need." icon={<FaCode />} />
              <Feature title="Global Talent" description="Hire developers from around the world to build your remote team." icon={<FaGlobe />} />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const Feature = ({ title, description, icon }) => {
  return (
    <Stack align="center" spacing="4" textAlign="center">
      <Flex align="center" justify="center" borderRadius="full" color="blue.600" p="4">
        {icon}
      </Flex>
      <Text as="h4" fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text color="gray.500">{description}</Text>
    </Stack>
  );
};

export default Index;
