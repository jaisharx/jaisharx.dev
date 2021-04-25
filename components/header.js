import { Box, Text, Button, Heading, Link } from '@chakra-ui/react';
import { SmallContainer } from './container';

export default function Header() {
    return (
        <Box as="header" mb="60">
            <SmallContainer>
                <Heading
                    color="#fff"
                    mt="28"
                    lineHeight="1.4"
                    fontWeight="normal"
                    fontSize="32px"
                >
                    Hi there, I’m{' '}
                    <Text as="span" color="#2DFFC0" fontWeight="500">
                        Jai Sharma.
                    </Text>{' '}
                    Software developer from New Delhi, India. I specialize in
                    building clean & modern looking interfaces.
                </Heading>
                <Button
                    as={Link}
                    isExternal
                    mt="9"
                    size="lg"
                    variant="outline"
                    color="#fff"
                    borderRadius="4"
                    href="https://www.upwork.com/freelancers/~016a63e98fbee15249"
                    _hover={{
                        color: 'black',
                        background: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Hire me @UpWork
                </Button>
            </SmallContainer>
        </Box>
    );
}
