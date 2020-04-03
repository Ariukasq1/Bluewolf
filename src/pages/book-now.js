import React from 'react';
import Head from 'next/head'

// const wp = new WPAPI({ endpoint: Config().apiUrl });

const GA_TRACKING_ID = 'GTM-NN7QKCX';

export default () => {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${GA_TRACKING_ID}');`
        }}>
        </script>
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />

      <div data-erxes-embed=" " style={{ width: "900px", height: "800px" }}></div>
    </>
  );
}
