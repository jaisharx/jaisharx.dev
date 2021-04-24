import { Box } from '@chakra-ui/react';

function SmallContainer(props) {
    return (
        <Box maxW="900px" mx="auto">
            {props.children}
        </Box>
    );
}

function Container(props) {
    return (
        <Box maxW="1320px" mx="auto">
            {props.children}
        </Box>
    );
}

export { Container, SmallContainer };
