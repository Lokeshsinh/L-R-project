import React from "react";
import {
    Phone,
    Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/FloatingContact.module.css";

const FloatingContact = () => {
    const companyPhone = "+918595351363";
    const companyEmail = "Info.Lr1995@gmail.com";

    const handlePhoneClick = () => {
        window.location.href = `tel:${companyPhone}`;
    };

//     const handleMailClick = () => {
//         const subject = encodeURIComponent(
//             "Enquiry - L&R Prefab Solar India"
//         );

//         const body = encodeURIComponent(
//             `Hello L&R Team,

// I would like to know more about your products and solutions.

// Please share more information with me.

// Thank you.`
//         );

//         window.location.href =
//             `mailto:${companyEmail}?subject=${subject}&body=${body}`;
//     };



    const handleMailClick = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent("Enquiry - L&R Prefab Solar India");
        const body = encodeURIComponent(
            `Hello L&R Team,\n\nI would like to know more about your products and solutions.\nPlease share more information with me.\nThank you.`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank", "noopener,noreferrer");
    };
    const handleWhatsAppClick = () => {
        const whatsappNumber = "918595351363";

        const message = encodeURIComponent(
            `Hello L&R Team,

I would like to know more about your products and solutions.

Please share more information with me.

Thank you.`
        );

        window.open(
            `https://wa.me/${whatsappNumber}?text=${message}`,
            "_blank"
        );
    };

    return (
        <div className={styles.floatingContact}>

            {/* Phone */}
            <button
                type="button"
                className={styles.contactItem}
                onClick={handlePhoneClick}
                aria-label="Call us"
            >
                <span className={styles.iconWrapper}>
                    <Phone size={39} strokeWidth={2.2} />
                </span>

                <span className={styles.tooltip}>
                    Call Us
                </span>
            </button>

            {/* Email */}
            <button
                type="button"
                className={styles.contactItem}
                onClick={handleMailClick}
                aria-label="Email us"
            >
                <span className={styles.iconWrapper}>
                    <Mail size={39} strokeWidth={2.2} />
                </span>

                <span className={styles.tooltip}>
                    Email Us
                </span>
            </button>

            {/* WhatsApp */}
            <button
                type="button"
                className={styles.contactItem}
                onClick={handleWhatsAppClick}
                aria-label="Chat with us on WhatsApp"
            >
                <span className={`${styles.iconWrapper} ${styles.whatsappIcon}`}>
                    <FaWhatsapp size={42} />
                </span>

                <span className={styles.tooltip}>
                    WhatsApp Us
                </span>
            </button>

        </div>
    );
};

export default FloatingContact;




// import React from "react";
// import {
//     Phone,
//     Mail,
//     UserRound,
// } from "lucide-react";
// import styles from "../styles/FloatingContact.module.css";

// const FloatingContact = () => {
//     const companyPhone = "+918595351363";
//     const companyEmail = "Info.lr1995@gmail.com";

//     const handlePhoneClick = () => {
//         window.location.href = `tel:${companyPhone}`;
//     };

//     //     const handleMailClick = (e) => {
//     //         e.preventDefault();
//     //         e.stopPropagation();

//     //         const subject = encodeURIComponent(
//     //             "Enquiry - L&R Prefab Solar India"
//     //         );

//     //         const body = encodeURIComponent(
//     //             `Hello L&R Team,
//     // I would like to know more about your products and solutions.
//     // Please share more information with me.
//     // Thank you.`
//     //         );

//     //         const gmailUrl =
//     //             `https://mail.google.com/mail/?view=cm&fs=1` +
//     //             `&to=${encodeURIComponent(companyEmail)}` +
//     //             `&su=${subject}` +
//     //             `&body=${body}`;

//     //         const newWindow = window.open(gmailUrl, "_blank");
//     //         if (!newWindow) {
//     //             window.open(
//     //                 "https://mail.google.com/mail/?view=cm",
//     //                 "_blank"
//     //             );
//     //         }
//     //     };

//     const handleMailClick = (e) => {
//         e.preventDefault();

//         const subject = encodeURIComponent("Enquiry - L&R Prefab Solar India");
//         const body = encodeURIComponent(
//             `Hello L&R Team,\n\nI would like to know more about your products and solutions.\nPlease share more information with me.\nThank you.`
//         );

//         const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${subject}&body=${body}`;

//         window.open(gmailUrl, "_blank", "noopener,noreferrer");
//     };
//     const handlePersonClick = () => {
//         window.dispatchEvent(
//             new CustomEvent("open-ai-chatbot")
//         );
//     };

//     return (
//         <div className={styles.floatingContact}>

//             <button
//                 type="button"
//                 className={styles.contactButton}
//                 onClick={handlePhoneClick}
//                 aria-label="Call us"
//             >
//                 <Phone size={22} strokeWidth={2} />
//             </button>


//             <a href={`mailto:${companyEmail}`}>
//                 <button
//                     type="button"
//                     className={styles.contactButton}
//                     onClick={handleMailClick}
//                     aria-label="Email us"
//                 >
//                     <Mail size={22} strokeWidth={2} />
//                 </button>
//             </a>
//             <button
//                 type="button"
//                 className={styles.contactButton}
//                 onClick={handlePersonClick}
//                 aria-label="Assistant"
//             >
//                 <UserRound size={22} strokeWidth={2} />
//             </button>

//         </div>
//     );
// };

// export default FloatingContact;