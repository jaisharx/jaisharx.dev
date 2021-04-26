import { Box } from '@chakra-ui/react';

function SmallContainer(props) {
    return (
        <Box maxW="900px" mx="auto">
            <Box m={[4, 6, 0]}>{props.children}</Box>
        </Box>
    );
}

function Container(props) {
    return (
        <Box maxW="1320px" mx="auto">
            <Box m={[4, 4, 8]}>{props.children}</Box>
        </Box>
    );
}

export { Container, SmallContainer };
