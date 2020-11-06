import Head from 'next/head';
import siteConfig from './siteConfig';

const prepareTitle = (givenTitle) => {
    return givenTitle || siteConfig.title;
};

const prepareDescription = (givenDescription) => {
    return givenDescription || siteConfig.description;
};

function index(props) {
    return (
        <Head>
            <meta charSet="UTF-8" />

            <title>{prepareTitle(props.title)}</title>
            <meta name="description" content={prepareDescription(props.description)} />

            <meta name="author" content={siteConfig.author} />
            <meta
                name="keywords"
                content={props.keywords ? props.keywords.join(',') : siteConfig.keywords.join(',')}
            />

            <meta
                name="viewport"
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
            />
            {props.canonical && <link rel="canonical" href={props.canonical} />}
            <meta httpEquiv="Content-Language" content="en" />

            <meta property="og:title" content={prepareTitle(props.title)} />
            <meta property="og:description" content={prepareDescription(props.description)} />
            <meta property="og:image" content={`${siteConfig.url.web}${siteConfig.logoSquare}`} />
            <meta property="og:url" content={siteConfig.url.web} />
            <meta property="og:type" content="website" />
            <meta
                property="article:publisher"
                content={`https://facebook.com/${siteConfig.facebook}`}
            />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="article:author" content={siteConfig.author} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={`@${siteConfig.twitter}`} />
            <meta name="twitter:title" content={prepareTitle(props.title)} />
            <meta name="twitter:description" content={prepareDescription(props.description)} />
            <meta name="twitter:image" content={`${siteConfig.url.web}${siteConfig.logoSquare}`} />
            <meta name="twitter:image:alt" content="jaisharma.dev" />
        </Head>
    );
}

export default index;
