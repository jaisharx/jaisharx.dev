import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { SmallContainer } from './container';

export default function Navbar() {
    return (
        <Box color="white" py="4" pt="6">
            <SmallContainer>
                <HStack>
                    <Text fontWeight="bold" mr="auto" fontSize="32px">
                        JS
                    </Text>
                    <Link fontSize="18px" href="/about">
                        <Text>About</Text>
                    </Link>
                    <Link fontSize="18px" pl="6" href="#contact">
                        <Text>Contact</Text>
                    </Link>
                </HStack>
            </SmallContainer>
        </Box>
    );
}
