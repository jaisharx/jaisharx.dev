import { Box, Text, Button, Heading } from '@chakra-ui/react';
import { SmallContainer } from './container';

export default function Header() {
    return (
        <Box as="header">
            <SmallContainer>
                <Heading
                    color="#fff"
                    mt="28"
                    lineHeight="1.4"
                    fontWeight="normal"
                    fontSize="32px"
                >
                    Hi, I’m{' '}
                    <Text as="span" color="#2DFFC0">
                        Jai Sharma
                    </Text>
                    . Software developer based in New Delhi, India. I build
                    stuff with modern technologies like Nextjs.
                </Heading>
                <Button
                    mt="9"
                    variant="outline"
                    color="#fff"
                    borderRadius="4"
                    _hover={{ color: 'black', background: 'white' }}
                >
                    View my projects
                </Button>
            </SmallContainer>
        </Box>
    );
}
