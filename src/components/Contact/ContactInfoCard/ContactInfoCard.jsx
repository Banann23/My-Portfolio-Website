import styles from './ContactInfoCard.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../styles/animations.js'
import PropTypes from 'prop-types';

function ContactInfoCard({ contactInfoCardIcon, contactInfoCardText }) {
    return (
        <motion.div {...fadeIn} className={styles.contactInfoCard}>
            <svg className="icon"> <use href={contactInfoCardIcon}></use> </svg>
            <span> {contactInfoCardText} </span>
        </motion.div>
    )
}

ContactInfoCard.PropTypes = {
    contactInfoCardIcon: PropTypes.string.isRequired,
    contactInfoCardText: PropTypes.string.isRequired,
};

export default ContactInfoCard