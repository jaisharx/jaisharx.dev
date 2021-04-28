import { Box, Text, Heading, HStack, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';
import NextImage from 'next/image';
import '@fontsource/monoton';

const BigTitle = styled(Text)`
    font-size: 88px;
    font-family: 'Monoton';
`;

const CustomLink = styled(Link)`
    font-size: 1.5rem;
    font-weight: 500;
    color: #2dffc0;

    &:focus {
        box-shadow: 0 0 0 3px currentColor; 
    }
`;

const BulletDot = styled(Text)`
    font-size: 1.5rem;
    font-weight: 500;
    color: #2dffc0;
`;

function Project({ count, title, imgSrc, url, githubUrl, children }) {
    return (
        <Box color="white" mt={28} as="article">
            <BigTitle>Project {count}</BigTitle>
            <Heading textTransform="uppercase" mt={2}>
                {title.toUpperCase()}
            </Heading>
            <Text fontSize="2rem" mt={6}>
                {children}
            </Text>
            <HStack mt={12}>
                <CustomLink href={url} isExternal>
                    Live Url
                </CustomLink>
                <BulletDot>•</BulletDot>
                <CustomLink href={githubUrl} isExternal>
                    Source Code
                </CustomLink>
            </HStack>
            <Box mt={12}>
                <Link href={url} isExternal>
                    <NextImage
                        src={`/${imgSrc}.png`}
                        width="1280"
                        height="800"
                        alt={title}
                    />
                </Link>
            </Box>
        </Box>
    );
}

export default function Projects() {
    return (
        <Box as="main">
            <Container>
                <Project
                    count="01"
                    title="Dev.to Clone"
                    imgSrc="dev.to"
                    url="https://dev-to-pied.vercel.app/"
                    githubUrl="https://github.com/jaisharx/dev.to"
                >
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
                <Project
                    count="02"
                    title="Nextjs Website"
                    imgSrc="nextjs"
                    url="https://nextjs-org-website.vercel.app/"
                    githubUrl="https://github.com/jaisharx/nextjs.org"
                >
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
                <Project
                    count="03"
                    title="Designwiz"
                    imgSrc="designwiz"
                    url="https://designwiz.vercel.app/"
                    githubUrl="https://github.com/jaisharx/designwiz"
                >
                    Built with react & nextjs, thus it’s performant by it’s very
                    nature. <br /> It’s using a component library - chakra UI
                    for it’s theme.
                </Project>
            </Container>
        </Box>
    );
}
