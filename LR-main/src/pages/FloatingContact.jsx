import React from "react";
import {
    Phone,
    Mail,
    UserRound,
} from "lucide-react";
import styles from "../styles/FloatingContact.module.css";

const FloatingContact = () => {
    const companyPhone = "+918595351363";
    const companyEmail = "Info.Lr1995@gmail.Com";

    const handlePhoneClick = () => {
        window.location.href = `tel:${companyPhone}`;
    };

    const handleMailClick = () => {
        const subject = encodeURIComponent(
            "Enquiry - L&R Prefab Solar India"
        );

        const body = encodeURIComponent(
            `Hello L&R Team,

I would like to know more about your products and solutions.

Please share more information with me.

Thank you.`
        );

        window.location.href =
            `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    };

    const handlePersonClick = () => {
        // Replace this with your AI chatbot open function
        window.dispatchEvent(new CustomEvent("open-ai-chatbot"));
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
            {/* Mail */}
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
            {/* Person / AI Assistant */}
            <button
                type="button"
                className={styles.contactItem}
                onClick={handlePersonClick}
                aria-label="AI Assistant"
            >
                <span className={styles.iconWrapper}>
                    <UserRound size={39} strokeWidth={2.2} />
                </span>
                <span className={styles.tooltip}>
                    AI Assistant
                </span>
            </button>
        </div>
    );
};

export default FloatingContact;