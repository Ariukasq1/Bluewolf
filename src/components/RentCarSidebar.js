import React from 'react';
import Head from 'next/head';

function RentCarSidebar() {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.erxesSettings = {
            forms: [{
              brand_id: "7PXBCt",
              form_id: "pPJbq8",
            }],
          };
          
        (function() {
          var script = document.createElement('script');
          script.src = "https://bluewolf.app.erxes.io/widgets/build/formWidget.bundle.js";
          script.async = true;
        
          var entry = document.getElementsByTagName('script')[0];
          entry.parentNode.insertBefore(script, entry);
        })();`
        }} />
      </Head>
      <div className='col-lg-4'>
        <div className="service-details-content">
          <div data-erxes-embed='pPJbq8' style={{width: '330px',height: '720px'}}></div>
        </div>
      </div>
    </>
  );
}

export default RentCarSidebar;