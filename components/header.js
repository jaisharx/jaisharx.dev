import { Text, Box, Grid, HStack } from '@chakra-ui/react';
import Container from './container';

function LeftColumn() {
    return (
        <Box color="white">
            <Text fontSize="4xl">JS</Text>
            <Text fontSize="4xl" fontWeight="light" mt={28}>
                Hi, there ✋
            </Text>
            <Text fontSize="5xl" mt={4}>
                I’m Jai Sharma
            </Text>
            <Text fontSize="large" mt={6}>
                I’m a Software Developer from New Delhi, India. I specialize in
                creating high quality <br /> websites & webapps made with love
                of modern web technologies.
            </Text>
            <HStack mt={10}>
                
            </HStack>
        </Box>
    );
}

export default function Header() {
    return (
        <Box as="header">
            <Container>
                <Grid templateColumns="1.4fr 1fr">
                    <LeftColumn />
                </Grid>
            </Container>
        </Box>
    );
}
