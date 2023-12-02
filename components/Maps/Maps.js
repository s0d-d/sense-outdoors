import React from "react";

const Maps = React.memo(function Maps({ className }) {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.3752387788973!2d106.92972010308242!3d47.89042209914912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96932f60f72097%3A0x41008d5a3f86f29!2sSENSE%20OUTDOORS!5e0!3m2!1sen!2shu!4v1701447658281!5m2!1sen!2shu"
            width="600"
            height="450"
            className={`w-full h-120 ${className && className}`}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    );
});

export { Maps };
