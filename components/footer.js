import { Box, Link, Text, Heading } from '@chakra-ui/react';
import { Container } from './container';

export default function Footer() {
    return (
        <Box as="footer" id="contact" my="80">
            <Container>
                <Heading fontSize="100px" color="white">
                    Like what you see? <br /> Reach out to me at
                    <Text textDecoration="underline">
                        {' '}
                        <Link>sendtojsharma@gmail.com</Link>
                    </Text>
                </Heading>
            </Container>
        </Box>
    );
}
