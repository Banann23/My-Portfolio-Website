import styles from './FAQCard.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'
import PropTypes from 'prop-types';

function FaqCard({ faqCardLabel, faqCardContent }) {
    return (
        <motion.div {...fadeIn} className={styles.faqCard}>
            <label> {faqCardLabel} </label>
            <div> {faqCardContent} </div>
        </motion.div>
    )
}

FaqCard.propTypes = {
    faqCardLabel: PropTypes.string.isRequired,
    faqCardContent: PropTypes.string.isRequired,
};

export default FaqCard;
