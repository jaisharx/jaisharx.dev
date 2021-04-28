import { Box } from '@chakra-ui/react';

export default function Container(props) {
    return (
        <Box maxW="1320px" mx="auto" {...props}>
            <Box m={[4, 4, 8]}>{props.children}</Box>
        </Box>
    );
}
