import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/news" p={2} mx={2}>
            News
          </Link>
          <Link as={RouterLink} to="/markets" p={2} mx={2}>
            Markets
          </Link>
          <Link as={RouterLink} to="/opinion" p={2} mx={2}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/more" p={2} mx={2}>
            More
          </Link>
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        {/* Headline Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Prominent Headline
          </Heading>
          <Text fontSize="lg">
            This is the main content area where the most important news headline will be displayed. It should be
            engaging and attract the reader's attention.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.100" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4}>
            <Link as={RouterLink} to="/link1">
              Additional Link 1
            </Link>
            <Link as={RouterLink} to="/link2">
              Additional Link 2
            </Link>
            <Link as={RouterLink} to="/link3">
              Additional Link 3
            </Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex>
            <Link as={RouterLink} to="/contact" p={2} mx={2}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" p={2} mx={2}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" p={2} mx={2}>
              Terms of Service
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;