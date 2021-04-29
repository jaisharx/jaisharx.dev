import { Text, Box, Grid, HStack, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import Container from './container';

import GmailIcon from './icons/gmail-icon.svg';
import GithubIcon from './icons/github-icon.svg';
import DevToIcon from './icons/dev.to-icon.svg';
import MediumIcon from './icons/medium-icon.svg';
import DribbleIcon from './icons/dribble-icon.svg';

const SocialLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border: 1px solid white;
    border-radius: 100%;

    @media (min-width: 48em) {
        width: 64px;
        height: 64px;
    }

    &:hover,
    &:active {
        background-color: white;
        svg {
            fill: black;
        }
    }

    &:focus {
        box-shadow: 0 0 0 3px #2dffc0;
    }
`;

const FancyUnderline = styled.span`
    position: relative;
    &::after {
        content: '';
        height: 8px;
        width: 106%;
        opacity: 0.6;
        background-color: #2dffc0;
        position: absolute;
        bottom: 0;
        left: -2px;
    }
`;

function LeftColumn() {
    return (
        <Box color="white">
            <Text fontSize="4xl">JS</Text>
            <Text fontSize="4xl" fontWeight="light" mt={28}>
                Hi, there ✋
            </Text>
            <Text fontSize="5xl" mt={4}>
                I’m Jai Sharma.
            </Text>
            <Text fontSize={{ base: 'medium', md: 'large' }} maxW="85%" mt={6}>
                I’m a Software Developer based in New Delhi, India. I specialize in creating{' '}
                high quality <FancyUnderline>websites</FancyUnderline> &{' '}
                <FancyUnderline>webapps</FancyUnderline> made with ❤ of modern web
                technologies.
            </Text>
            <HStack spacing={9} mt={10} pr={-4}>
                <SocialLink
                    isExternal
                    aria-label="Gmail"
                    href="mailto:sendtojsharma@gmail.com"
                >
                    <GmailIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Github"
                    href="https://github.com/jaisharx"
                >
                    <GithubIcon />
                </SocialLink>
                <SocialLink isExternal aria-label="Dev.to" href="https://dev.to/jaisharx">
                    <DevToIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Medium"
                    href="https://medium.com/@jaisharx"
                >
                    <MediumIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Dribble"
                    href="https://dribbble.com/jaisharx"
                >
                    <DribbleIcon />
                </SocialLink>
            </HStack>
        </Box>
    );
}

export default function Header() {
    return (
        <Box as="header" mt={20}>
            <Container>
                <Grid templateColumns={{ md: '1fr', lg: '1.4fr 1fr' }}>
                    <LeftColumn />
                    <Box display={{ base: 'none', lg: 'block' }}>
                        <NextImage
                            src="/profile.jpg"
                            width="1246"
                            height="1664"
                            alt="My Image"
                        />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
