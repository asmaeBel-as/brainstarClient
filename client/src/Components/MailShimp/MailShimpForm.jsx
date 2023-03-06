import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from 'react'
import Newsletter from "../NewsLetter/Newsletter";

const MailShimpForm = () => {
    const postUrl =
      "https://onrender.us17.list-manage.com/subscribe/post?u=4bb2c9096e6826f39c506e362&amp;id=26fe5a49a8&amp;f_id=00895ee0f0";
    return (
      <>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Newsletter
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </>
    );
}

export default MailShimpForm