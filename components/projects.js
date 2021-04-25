import { Box, Grid, Flex, Text, HStack, Badge } from '@chakra-ui/react';
import { Container } from './container';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';

const ImageContainer = styled(Box)`
    &:hover .overlay {
        opacity: 1;
    }
`;

function Card({ imgSrc }) {

    return (
        <Box borderRadius="4px" overflow="hidden" cursor="pointer">
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
                                Medium Clone
                            </Text>
                            <HStack>
                                <Badge colorScheme="blue">React</Badge>
                                <Badge colorScheme="blue">React</Badge>
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

export default function Projects() {
    return (
        <Box id="#projects">
            <Container>
                <Grid templateColumns="repeat(auto-fit, minmax(640px, 1fr))" gap="5">
                    {/* <Card imgSrc="/medium" /> */}
                    {/* <Card imgSrc="/dev.to" /> */}
                    <Card imgSrc="/nextjs" />
                    <Card imgSrc="/designwiz" />
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)" gap="5" mt="5">
                    <NextImage src="/project5.png" width="437" height="307" />
                    <NextImage src="/project6.png" width="437" height="307" />
                    <NextImage src="/project7.png" width="437" height="307" />
                    {/* <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/> */}
                </Grid>
            </Container>
        </Box>
    );
}