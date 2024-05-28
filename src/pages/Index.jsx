import { Box, Container, Flex, Heading, Link, Spacer, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const { data: events, error, isLoading } = useEvents();
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
        {isLoading && <Spinner />}
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
          {events && events.length > 0 && (
            <VStack spacing={4} align="stretch">
              {events.map(event => (
                <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg">
                  <Heading as="h3" size="sm">{event.name}</Heading>
                  <Text>{event.description}</Text>
                  <Text>{new Date(event.date).toLocaleDateString()}</Text>
                  <Text>Venue: {event.venue.name}</Text>
                </Box>
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;