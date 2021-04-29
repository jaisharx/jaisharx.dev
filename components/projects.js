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
            <Box borderRadius="md" overflow="hidden" mt={12}>
                <Link href={url} isExternal>
                    <Box position="relative" w="1280px" h="800px">
                        <NextImage
                            alt={title}
                            src={`/${imgSrc}.png`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Box>
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
                    Dev.to clone built by me from scratch (yeah, no YT tuts).{' '}
                    <br />
                    It's using react & nextjs for it's framework, and chakra UI
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
                    it.
                    <br /> That's why I rebuilt it pixel perfect to see how
                    close I can get.
                </Project>
                <Project
                    count="03"
                    title="Designwiz"
                    imgSrc="designwiz"
                    url="https://designwiz.vercel.app/"
                    githubUrl="https://github.com/jaisharx/designwiz"
                >
                    I rebuilt a modern looking design based website. <br/>
                    Achieving a score of 100 on a lighthouse audit as well.
                </Project>
            </Container>
        </Box>
    );
}
