import styles from './ContactInfoCard.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'

function ContactInfoCard({ contactInfoCardIcon, contactInfoCardText }) {
    return (
        <>
            <motion.div {...fadeIn} className={styles.contactInfoCard}>
                <svg className="icon"> <use href={contactInfoCardIcon}></use> </svg>
                <span> {contactInfoCardText} </span>
            </motion.div>
        </>
    )
}

export default ContactInfoCard