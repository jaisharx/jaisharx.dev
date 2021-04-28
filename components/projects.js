import { Box, Text, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';
import NextImage from 'next/image';
import '@fontsource/monoton';

const BigTitle = styled(Text)`
    font-size: 88px;
    font-family: 'Monoton';
`;

function Project({ count, title, imgSrc, children }) {
    return (
        <Box color="white" mt={28} as="article">
            <BigTitle>Project {count}</BigTitle>
            <Heading textTransform="uppercase" mt={2}>
                {title.toUpperCase()}
            </Heading>
            <Text fontSize="2rem" mt={6}>
                {children}
            </Text>
            <Box mt={24}>
                <NextImage src={`/${imgSrc}.png`} width="1280" height="800" alt={title} />
            </Box>
        </Box>
    );
}

export default function Projects() {
    return (
        <Box as="main">
            <Container>
                <Project count="01" title="Dev.to Clone" imgSrc="dev.to">
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
                <Project count="02" title="Nextjs Website" imgSrc="nextjs">
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
                <Project count="03" title="Designwiz" imgSrc="designwiz">
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
            </Container>
        </Box>
    );
}
