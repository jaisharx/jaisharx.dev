import { Box, Text, Heading, HStack, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';
import NextImage from 'next/image';
import '@fontsource/monoton';

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
            <Text fontSize={{ base: '5xl', lg: '8xl' }} fontFamily="Monoton">
                Project {count}
            </Text>
            <Heading
                fontSize={{ base: 'lg', md: '3xl' }}
                textTransform="uppercase"
                mt={2}
            >
                {title.toUpperCase()}
            </Heading>
            <Text
                mt={6}
                fontSize={{ base: 'lg', lg: '3xl' }}
                maxW={{ base: '100%', lg: '70%' }}
            >
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
            <Box borderRadius="md" overflow="hidden" mt={{ base: 4, lg: 12}}>
                <Link href={url} isExternal>
                    <NextImage
                        alt={title}
                        src={`/${imgSrc}.png`}
                        width="1280"
                        height="800"
                        objectFit="cover"
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
                    Dev.to clone built by me from scratch (yeah, no YT tuts).
                    It's using react & nextjs as its framework, and chakra UI
                    for themeability.
                </Project>
                <Project
                    count="02"
                    title="Nextjs Website"
                    imgSrc="nextjs"
                    url="https://nextjs-org-website.vercel.app/"
                    githubUrl="https://github.com/jaisharx/nextjs.org"
                >
                    Nextjs homepage website has a very clean & modern look to
                    it. That's why I rebuilt it pixel perfect to see how close I
                    can get.
                </Project>
                <Project
                    count="03"
                    title="Designwiz"
                    imgSrc="designwiz"
                    url="https://designwiz.vercel.app/"
                    githubUrl="https://github.com/jaisharx/designwiz"
                >
                    I rebuilt a modern looking design based website. Achieving a
                    score of 100 on a lighthouse audit as well.
                </Project>
            </Container>
        </Box>
    );
}
