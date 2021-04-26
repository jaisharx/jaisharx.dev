import { Box, Text, Button, Heading, Link, Image } from '@chakra-ui/react';
import { SmallContainer } from './container';
import styled from '@emotion/styled';
import BgEffect from './bgEffect';

const HoverText = styled(Text)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }

    &:hover img {
        display: inline-block;
    }
`;

function HoverImage() {
    return (
        <Image
            src="/profile.jpg"
            position="absolute"
            w="24%"
            display="inline-block"
            top="80px"
            left="600px"
            zIndex="1000"
            borderRadius="4"
            display="none"
        />
    );
}

export default function Header() {
    return (
        <Box as="header" mb="60">
            <SmallContainer>
                <Heading
                    color="#fff"
                    mt="28"
                    lineHeight="1.4"
                    fontWeight="normal"
                    fontSize={{ base: '24px', md: '32px'}}
                >
                    Hi there, I’m{' '}
                    <HoverText as="span" color="#2DFFC0" fontWeight="500">
                        Jai Sharma.
                        <HoverImage />
                    </HoverText>{' '}
                    Software developer from New Delhi, India. I specialize in
                    building clean & modern looking interfaces.
                </Heading>
                <Button
                    as={Link}
                    isExternal
                    mt="9"
                    size="lg"
                    variant="outline"
                    color="#fff"
                    borderRadius="4"
                    href="https://www.upwork.com/freelancers/~016a63e98fbee15249"
                    _hover={{
                        color: 'black',
                        background: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Hire me @UpWork
                </Button>
            </SmallContainer>
            <BgEffect/>
        </Box>
    );
}
