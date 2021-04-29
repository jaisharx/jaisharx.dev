import { Box } from '@chakra-ui/react';

export default function Container({ children, ...rest }) {
    return (
        <Box maxW="1320px" mx="auto" {...rest}>
            <Box m={[4, 4, 8]}>{children}</Box>
        </Box>
    );
}
