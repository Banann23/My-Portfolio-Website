import styles from './FAQCard.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'

function FAQCard({ faqCardLabel, faqCardContent }) {
    return (
        <>
            <motion.div {...fadeIn} className={styles.faqCard}>
                <label> {faqCardLabel} </label>
                <div> {faqCardContent} </div>
            </motion.div>
        </>
    )
}

export default FAQCard;
