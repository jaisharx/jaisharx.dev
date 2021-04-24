import { Box, Link, Flex, Heading } from '@chakra-ui/react';
import { Container } from './container';
import GitHubCalendar from 'react-github-calendar';

const exampleTheme = {
    background: 'transparent',
    text: '#fff',
};

export default function Footer() {
    return (
        <Box as="footer" id="contact" my="80">
            <Container>
                <Heading
                    fontSize="100px"
                    color="white"
                    textShadow=" 1px 1px 0px #161919,
                    2px 2px 0px #161919,
                    3px 3px 0px #161919,
                    4px 4px 0px #161919,
                    5px 5px 0px #161919,
                    6px 6px 0px #161919,
                    7px 7px 0px #161919,
                    8px 8px 0px #161919,
                    9px 9px 0px #161919,
                    10px 10px 0px #161919,
                    11px 11px 0px #161919,
                    12px 12px 0px #161919;"
                >
                    Like what you see? <br /> Reach out to me at <br />
                    <Link
                        _hover={{ borderBottom: '12px solid #2DFFC0' }}
                        href="mailto:sendtojsharma@gmail.com"
                    >
                        sendtojsharma@gmail.com
                    </Link>
                </Heading>
                {/* <Flex justify="center" mt="40">
                    <GitHubCalendar username="jaisharx" theme={exampleTheme} blockSize={20}/>
                </Flex> */}
            </Container>
        </Box>
    );
}
