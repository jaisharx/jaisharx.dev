import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { SmallContainer } from './container';

export default function Navbar() {
    return (
        <Box color="white" py="4" pt="6">
            <SmallContainer>
                <HStack>
                    <Text
                        as={Link}
                        fontWeight="bold"
                        mr="auto"
                        fontSize="32px"
                        href="/"
                    >
                        JS
                    </Text>
                    <Link fontSize="16px" href="#contact" pr="4">
                        <Text>Blog</Text>
                    </Link>
                    <Link fontSize="16px" href="#contact">
                        <Text>Contact</Text>
                    </Link>
                </HStack>
            </SmallContainer>
        </Box>
    );
}
