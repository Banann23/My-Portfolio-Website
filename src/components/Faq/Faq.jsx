import FaqCard from './FaqCard/FaqCard.jsx';
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Faq() {

    const { t } = useTranslation();

    return (
        <>
            <div className={"titleContainer"}>
                <motion.div {...slideIn} className={"title"}> {t("faqTitle")} </motion.div>
                <motion.div {...fadeIn} className={"subtitle"}> {t("faqSubtitle")} </motion.div>
            </div>
            <div className="faqCardsContainer">
                <FaqCard faqCardLabel={t("faqCardLabel1")} faqCardContent={t("faqCardContent1")} />
                <FaqCard faqCardLabel={t("faqCardLabel2")} faqCardContent={t("faqCardContent2")} />
                <FaqCard faqCardLabel={t("faqCardLabel3")} faqCardContent={t("faqCardContent3")} />
                <FaqCard faqCardLabel={t("faqCardLabel4")} faqCardContent={t("faqCardContent4")} />
            </div>
        </>
    )
}

export default Faq;
