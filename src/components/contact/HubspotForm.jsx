import React, { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '45057484',
          formId: '16846e77-1200-4f8f-b609-39ac11127a30',
          region: 'na1'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  },);
 
};

export default HubspotForm;