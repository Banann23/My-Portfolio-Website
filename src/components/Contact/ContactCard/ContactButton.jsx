import styles from './ContactButton.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'

function ContactButton({ contactButtonLink, contactButtonIcon, contactButtonLabel }) {
    return (
        <>
            <motion.a {...fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.contactButton} href={contactButtonLink} target="_blank" rel="noopener noreferrer">
                <svg className="icon"> <use href={contactButtonIcon}></use> </svg>
                <span> {contactButtonLabel} </span>
            </motion.a>
        </>
    )
}

export default ContactButton