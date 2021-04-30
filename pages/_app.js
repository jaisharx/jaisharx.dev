import { ChakraProvider } from '@chakra-ui/react';
import 'styles/globals.css';
import content from 'lib/seo';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextHead title={content.title} desc={content.desc} />
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
