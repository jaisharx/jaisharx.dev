import { Box, Grid, Flex, Text, HStack, Badge, Link } from '@chakra-ui/react';
import { Container } from './container';
import Iframe from 'react-iframe';
import { useEffect } from 'react';

function Card({ title, href, githubLink }) {
    useEffect(() => {
        const iframeWin = document.querySelector('.custom-iframe')
            .contentWindow;
        iframeWin.postMessage('isZoomed', 'http://jaisharma.dev/');
    });

    return (
        <Box
            as={Link}
            href={href}
            isExternal
            borderRadius="4px"
            overflow="hidden"
            cursor="pointer"
        >
            <Iframe
                url={href}
                width="644px"
                height="614px"
                className="custom-iframe"
            />
        </Box>
    );
}

export default function Projects() {
    return (
        <Box id="#projects">
            <Container>
                <Grid
                    templateColumns="repeat(auto-fit, minmax(600px, 1fr))"
                    gap="5"
                >
                    <Card
                        imgSrc="/dev.to"
                        title="Dev.to Clone"
                        href="https://dev-to-pied.vercel.app/"
                        githubLink="https://github.com/jaisharx/nextjs.org"
                    />

                    <Card
                        imgSrc="/nextjs"
                        title="Nextjs.org"
                        href="https://nextjs-org-website.vercel.app/"
                        githubLink="https://github.com/jaisharx/designwiz"
                    />
                    <Card
                        imgSrc="/nextjs"
                        title="Nextjs.org"
                        href="https://designwiz.vercel.app/"
                        githubLink="https://github.com/jaisharx/designwiz"
                    />
                    <Card
                        imgSrc="/project5"
                        title="Quizoo"
                        href="https://quizoo.vercel.app/"
                        githubLink="https://github.com/jaisharx/quizoo"
                    />
                    <Card
                        imgSrc="/project6"
                        title="Designwiz"
                        href="https://jaisharx.github.io/react-todo-app/"
                        githubLink="https://github.com/jaisharx/react-todo-app"
                    />
                    <Card
                        imgSrc="/project7"
                        title="Jsonplaceholder"
                        href="https://jsonplaceholder-api-viewer.vercel.app/"
                        githubLink="https://github.com/jaisharx/jsonplaceholder-api-viewer"
                    />
                </Grid>
            </Container>
        </Box>
    );
}
