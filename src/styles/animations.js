export const fadeIn = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1, transition: { delay: 0, duration: 0.5, ease: "easeOut" } },
    viewport: { once: false, amount: 0.5 }
};

export const fadeInLeft = {
    initial: { opacity: 0, y: 20, x: -50, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, x: 0, scale: 1, transition: { delay: 0, duration: 0.5, ease: "easeOut" } },
    viewport: { once: false, amount: 0.5 }
};


export const slideIn = {
    initial: { opacity: 0, x: -50, scale: 0.95 },
    whileInView: {
        opacity: 1, x: 0, scale: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
    },
    viewport: { once: false, amount: 0.5 }
}