import { Box, Container, Flex, Heading, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading as="h1" size="lg">
          Event Manager
        </Heading>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/events" p={2} color="white">
            Events
          </Link>
          <Link as={RouterLink} to="/about" p={2} color="white">
            About
          </Link>
        </Flex>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">
            Welcome to Event Manager
          </Heading>
          <Text>This is a placeholder for the main content.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;