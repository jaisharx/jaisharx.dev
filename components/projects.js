import { Box, Grid, Flex, Text, HStack, Badge, Link } from '@chakra-ui/react';
import { Container } from './container';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';

const ImageContainer = styled(Box)`
    &:hover .overlay {
        opacity: 1;
    }
`;

function Card({ imgSrc, title, href, githubLink }) {
    return (
        <Box
            as={Link}
            href={href}
            isExternal
            borderRadius="4px"
            overflow="hidden"
            cursor="pointer"
        >
            <ImageContainer w="655px" h="614" position="relative">
                <NextImage src={`${imgSrc}.png`} width="655" height="614" />
                <Flex
                    className="overlay"
                    align="flex-end"
                    flexDirection="column"
                    h="100%"
                    w="100%"
                    position="absolute"
                    bg="#2222222e"
                    top="0"
                    left="0"
                    opacity="0"
                    transition="opacity .2s ease"
                >
                    <Box
                        as={Link}
                        isExternal
                        href={githubLink}
                        bg="white"
                        p="2"
                        m="4"
                        borderRadius="8"
                        boxShadow="2xl"
                    >
                        <AiFillGithub fontSize="52px" />
                    </Box>

                    <Box h="150px" w="100%" bg="#fafafa" p="4" mt="auto">
                        <Flex align="center">
                            <Text fontSize="18px" fontWeight="medium" mr="3">
                                {title}
                            </Text>
                            <HStack>
                                <Badge colorScheme="blue">React</Badge>
                            </HStack>
                        </Flex>
                        <Text mt="2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam soluta voluptatibus amet architecto
                            nihil maiores reiciendis facilis, ipsum in eum?
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam velit minus ex ea deleniti impedit
                        </Text>
                    </Box>
                </Flex>
            </ImageContainer>
        </Box>
    );
}

function SmallCard({ imgSrc, title, href, githubLink }) {
    return (
        <Box
            as={Link}
            href={href}
            isExternal
            borderRadius="4px"
            overflow="hidden"
            cursor="pointer"
        >
            <ImageContainer w="437px" h="307px" position="relative">
                <NextImage src={`${imgSrc}.png`} width="437" height="307" />
                <Flex
                    className="overlay"
                    align="flex-end"
                    flexDirection="column"
                    h="100%"
                    w="100%"
                    position="absolute"
                    bg="#2222222e"
                    top="0"
                    left="0"
                    opacity="0"
                    transition="opacity .2s ease"
                >
                    <Box
                        as={Link}
                        isExternal
                        href={githubLink}
                        bg="white"
                        p="2"
                        mt="4"
                        mr="6"
                        borderRadius="8"
                        boxShadow="2xl"
                    >
                        <AiFillGithub fontSize="32px" />
                    </Box>

                    <Box h="120px" w="100%" bg="#fafafa" p="4" mt="auto">
                        <Flex align="center">
                            <Text fontSize="18px" fontWeight="medium" mr="3">
                                {title}
                            </Text>
                            {/* <HStack>
                                <Badge colorScheme="blue">React</Badge>
                            </HStack> */}
                        </Flex>
                        <Text mt="2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam soluta voluptatibus amet architecto
                            nihi.
                        </Text>
                    </Box>
                </Flex>
            </ImageContainer>
        </Box>
    );
}

export default function Projects() {
    return (
        <Box id="#projects">
            <Container>
                <Grid templateColumns="repeat(2, 1fr)" gap="5">
                    {/* <Card imgSrc="/medium" /> */}
                    {/* <Card imgSrc="/dev.to" /> */}
                    <Card
                        imgSrc="/nextjs"
                        title="Nextjs.org"
                        href="https://nextjs-org-website.vercel.app/"
                        githubLink="https://github.com/jaisharx/nextjs.org"
                    />
                    <Card
                        imgSrc="/designwiz"
                        title="Designwiz.com"
                        href="https://designwiz.vercel.app/"
                        githubLink="https://github.com/jaisharx/designwiz"
                    />
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)" gap="5" mt="5">
                    <SmallCard
                        imgSrc="/project5"
                        title="Quizoo"
                        href="https://quizoo.vercel.app/"
                        githubLink="https://github.com/jaisharx/quizoo"
                    />
                    <SmallCard
                        imgSrc="/project6"
                        title="Todo App"
                        href="https://jaisharx.github.io/react-todo-app/"
                        githubLink="https://github.com/jaisharx/react-todo-app"
                    />
                    <SmallCard
                        imgSrc="/project7"
                        title="Jsonplaceholder"
                        href="https://jsonplaceholder-api-viewer.vercel.app/"
                        githubLink="https://github.com/jaisharx/jsonplaceholder-api-viewer"
                    />
                    {/* <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/> */}
                </Grid>
            </Container>
        </Box>
    );
}
