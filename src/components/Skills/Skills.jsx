import SkillCard from './SkillCards/SkillCard.jsx';
import styles from './Skills.module.css';
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../styles/animations.js'
import { useTranslation } from 'react-i18next'

function Skills() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.skillsTitleContainer}>
                <motion.div {...slideIn} className={"title"}> {t("skillsTitle")} </motion.div>
                <motion.div {...fadeIn} className={"subtitle"}> {t("skillsSubtitle")} </motion.div>
            </div>
            <div className={styles.skillsContent}>
                <ul>
                    <SkillCard skillName="HTML" skillIcon="/sprite.svg#icon-html" skillLevel={t("skillsAdvanced")} />
                    <SkillCard skillName="CSS" skillIcon="/sprite.svg#icon-css" skillLevel={t("skillsAdvanced")} />
                    <SkillCard skillName="Tailwind CSS" skillIcon="/sprite.svg#icon-tailwind" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="JavaScript" skillIcon="/sprite.svg#icon-javascript" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="React" skillIcon="/sprite.svg#icon-react" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="Flutter" skillIcon="/sprite.svg#icon-flutter" skillLevel={t("skillsAdvanced")} />
                    <SkillCard skillName="Dart" skillIcon="/sprite.svg#icon-dart" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="Git & GitHub" skillIcon="/sprite.svg#icon-github" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="C++" skillIcon="/sprite.svg#icon-cpp" skillLevel={t("skillsIntermediate")} />
                    <SkillCard skillName="PHP" skillIcon="/sprite.svg#icon-php" skillLevel={t("skillsBeginner")} />
                    <SkillCard skillName="MySQL" skillIcon="/sprite.svg#icon-database" skillLevel={t("skillsBeginner")} />
                </ul>
            </div>
        </>
    )
}

export default Skills;