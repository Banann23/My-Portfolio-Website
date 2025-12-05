import styles from './Contact.module.css'
import ContactButton from './ContactCard/ContactButton.jsx'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard.jsx'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Contact() {

    const { t } = useTranslation();

    return (
        <>
            <div className={"titleContainer"}>
                <motion.div {...slideIn} className={"title"}> {t("contactTitle")} </motion.div>
                <motion.div {...fadeIn} className={"subtitle"}> {t("contactSubtitle")} </motion.div>
            </div>
            <div className={styles.contactsContainer}>
                <div className={styles.contactButtonsContainer}>
                    <div className={styles.contactButtons}>
                        <ContactButton contactButtonLink="https://www.linkedin.com/in/hubert-banach-716965388/" contactButtonIcon="/sprite.svg#icon-linkedin" contactButtonLabel="LinkedIn" />
                        <ContactButton contactButtonLink="https://github.com/Banann23" contactButtonIcon="/sprite.svg#icon-github" contactButtonLabel="GitHub" />
                        <ContactButton contactButtonLink="https://discord.com/users/983005930918662204" contactButtonIcon="/sprite.svg#icon-discord" contactButtonLabel="Discord" />
                        <ContactButton contactButtonLink="mailto: contact@hbanach.com" contactButtonIcon="/sprite.svg#icon-mail" contactButtonLabel="E-mail" />
                    </div>
                </div>
                <div className={styles.contactInfoContainer}>
                    <ContactInfoCard contactInfoCardIcon="/sprite.svg#icon-location" contactInfoCardText={t("contactInfoCard1")} />
                    <ContactInfoCard contactInfoCardIcon="/sprite.svg#icon-timer" contactInfoCardText={t("contactInfoCard2")} />
                </div>
            </div>
        </>
    )
}

export default Contact