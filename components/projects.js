import { Box, Grid, Flex, Text, HStack, Badge } from '@chakra-ui/react';
import { Container } from './container';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react';

const ImageContainer = styled(Box)`
    &:hover .overlay {
        opacity: 1;
    }
`;

function Card({ imgSrc }) {
    useEffect(() => {
        var w, m, c, C, W, H, HW, HH, r, diameter;

        var a = function () {
            document
                .querySelector('#__next')
                .appendChild(document.createElement('canvas'));
            w = window;
            m = Math;
            c = document.getElementsByTagName('canvas')[0];
            c.style.background = 'black';
            c.style.position = 'absolute';
            c.style.top = '0px';
            c.style.zIndex = '-1';
            c.style.opacity = '.1';
            C = c.getContext('2d');
        };

        var b = function () {
            W = c.width = w.innerWidth;
            H = c.height = w.innerHeight;
            HW = W / 2;
            HH = H / 2;
            diameter = 20;
        };

        var f = function (t) {
            t /= 3000;
            C.clearRect(0, 0, W, H);
            C.globalCompositeOperation = 'lighter';
            for (var k = 0; k < 3; k++) {
                if (k === 0) C.fillStyle = '#FF0000';
                if (k === 1) C.fillStyle = '#00FF00';
                if (k === 2) C.fillStyle = '#0000FF';
                for (let i = 0; i < H; i += diameter) {
                    for (let j = 0; j < W / 2; j += diameter) {
                        var index = i * W + j;
                        C.globalAlpha = m.tan(index * index - t);
                        C.fillRect(
                            m.tan(i * j - m.sin(index + k / 100) + t) * j +
                                HW -
                                diameter / 2,
                            i,
                            ((m.tan(index + i / j + t + k / 100) / 2) *
                                diameter) /
                                2,
                            (m.tan(index * index - t) * diameter) / 2
                        );
                    }
                }
            }
            r = requestAnimationFrame(f);
        };

        window.onload = function () {
            a();
            b();
            f();
            w.onresize = function () {
                cancelAnimationFrame(r);
                b();
                f();
            };
        };
    }, []);

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
                    <Card imgSrc="/medium" />
                    <Card imgSrc="/dev.to" />
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
