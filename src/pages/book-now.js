import React from 'react';
import Head from 'next/head';

import TagManager from 'react-gtm-module';

// const wp = new WPAPI({ endpoint: Config().apiUrl });
const tagManagerArgs = {
  gtmId: 'GTM-NN7QKCX'
}

export default function BookNow() {
  TagManager.initialize(tagManagerArgs)

  return (
    <>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />

      <div data-erxes-embed="qXsQ2D" style={{ width: "900px", height: "800px" }}></div>
    </>
  );
}
