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
    width: 64px;
    height: 64px;
    border: 1px solid white;
    border-radius: 100%;
`;

function LeftColumn() {
    return (
        <Box color="white">
            <Text fontSize="4xl">JS</Text>
            <Text fontSize="4xl" fontWeight="light" mt={28}>
                Hi, there ✋
            </Text>
            <Text fontSize="5xl" mt={4}>
                I’m Jai Sharma
            </Text>
            <Text fontSize="large" mt={6}>
                I’m a Software Developer from New Delhi, India. I specialize in
                creating high quality <br /> <u>websites</u> & <u>webapps</u>{' '}
                made with love of modern web technologies.
            </Text>
            <HStack spacing={9} mt={10}>
                <SocialLink>
                    <GmailIcon />
                </SocialLink>
                <SocialLink>
                    <GithubIcon />
                </SocialLink>
                <SocialLink>
                    <DevToIcon />
                </SocialLink>
                <SocialLink>
                    <MediumIcon />
                </SocialLink>
                <SocialLink>
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
                <Grid templateColumns="1.4fr 1fr">
                    <LeftColumn />
                    <NextImage src="/profile.jpg" width="1246" height="1664" />
                </Grid>
            </Container>
        </Box>
    );
}
