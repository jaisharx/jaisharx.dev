import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from 'components/google-analytics';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <GoogleAnalytics />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
