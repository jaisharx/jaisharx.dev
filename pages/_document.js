import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>

                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/monokai-sublime.min.css"
                    />
                    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js"></script>
                    <script
                        charSet="UTF-8"
                        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/java.min.js"
                    ></script>
                    <script
                        charSet="UTF-8"
                        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/xml.min.js"
                    ></script>
                    <script>hljs.initHighlightingOnLoad();</script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
