import { GA_TRACKING_ID } from 'lib/gtag';

const AnalyticsLib = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
const AnalyticsScript = {
    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
            `,
};

export default function GoogleAnalytics() {
    return (
        <>
            <script async src={AnalyticsLib} />
            <script dangerouslySetInnerHTML={AnalyticsScript} />
        </>
    );
}
