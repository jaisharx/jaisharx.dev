import { Box, Text, Heading, HStack, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';
import NextImage from 'next/image';
import '@fontsource/monoton';

import devtoImageSrc from 'public/devto.png';
import nextjsImageSrc from 'public/nextjs.png';
import designwizImageSrc from 'public/designwiz.png';

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

function Project({ id, count, title, imgSrc, url, githubUrl, children }) {
    return (
        <Box id={id} color="white" mt={28} as="article">
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
            <Box borderRadius="md" overflow="hidden" mt={{ base: 4, lg: 12 }}>
                <Link
                    href={url}
                    isExternal
                    _focus={{ boxShadow: '0 0 0 3px #2dffc0' }}
                >
                    <NextImage
                        alt={title}
                        src={imgSrc}
                        width="1280"
                        height="800"
                        placeholder="blur"
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
                    id="webapp"
                    count="01"
                    title="Dev.to Clone"
                    imgSrc={devtoImageSrc}
                    url="https://dev-to-pied.vercel.app/"
                    githubUrl="https://github.com/jaisharx/dev.to"
                >
                    Dev.to clone built by me from scratch (yeah, no YT tuts).
                    It's using react.js & next.js as its framework, and chakra
                    UI for themeability.
                </Project>
                <Project
                    id="website"
                    count="02"
                    title="Next.js Website"
                    imgSrc={nextjsImageSrc}
                    url="https://nextjs-org-website.vercel.app/"
                    githubUrl="https://github.com/jaisharx/nextjs.org"
                >
                    This repo is a recreation of the modern & sleek-looking
                    Next.js homepage. I've tried to get this as pixel-perfect as
                    possible.
                </Project>
                <Project
                    count="03"
                    title="Designwiz"
                    imgSrc={designwizImageSrc}
                    url="https://designwiz.vercel.app/"
                    githubUrl="https://github.com/jaisharx/designwiz"
                >
                    Landing page of a modern-looking website re-built by me,
                    scoring a score of 100/100 on a lighthouse audit (no kidding
                    with perf).
                </Project>
            </Container>
        </Box>
    );
}
