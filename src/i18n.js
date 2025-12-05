import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources: {
        en: {
            translation: {
                // Navbar
                home: "Home",
                aboutMe: "About Me",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
                faq: "FAQ",
                // Hero Section
                heroGreeting: 'Hi, I\'m ',
                heroTitle: 'Hubert Banach',
                heroSubtitle: 'Front-end & Mobile Developer',
                heroDesc: 'I build modern, responsive websites that are fast, accessible, and beautiful so your product looks great and works even better.',
                heroButton1: 'View my CV',
                heroButton2: 'My projects',
                popupButton1: 'Download',
                popupButton2: 'Print',
                // About Me Section
                aboutMeTitle: 'A little bit about me ',
                aboutMeTextP1: 'My name is',
                aboutMeTextP2: 'I\'m 20 years old and I\'m a junior programmer with a passion for web development and creating beautiful, functional websites. At the moment I\'m studying at',
                aboutMeTextP3: 'in Poznań. I graduated from a technical high school, specializing in IT. I love learning new technologies and improving my skills. In my free time, I enjoy making mobile applications in Flutter. When I\'m not on the computer, I enjoy fishing and I\'m also a big fan of old Japanese cars.',
                aboutMeEnd: 'Looking for a developer you can rely on? Reach out.',
                aboutMeCardTitle1: 'Education',
                aboutMeCardContent1P1: '- Technical school, IT specialization, ',
                aboutMeCardContent1P2: '- Collegium da Vinci Poznań, IT specialization',
                aboutMeCardTitle2: 'Languages',
                aboutMeCardContent2P1: '- English (B2),',
                aboutMeCardContent2P2: '- Polish (Native)',
                aboutMeCardTitle3: 'Interests',
                aboutMeCardContent3P1: '- Web development (HTML, CSS, JS, React),',
                aboutMeCardContent3P2: '- Mobile apps in Flutter,',
                aboutMeCardContent3P3: '- Old Japanese cars, basketball and fishing',
                aboutMeCardTitle4: 'What drives me',
                aboutMeCardContent4: 'I find my greatest satisfaction in seeing my code work and deliver real results. I love creating beautiful, functional websites that provide exceptional user experiences.',
                // Skills Section
                skillsTitle: 'Skills',
                skillsSubtitle: 'The tech stack that powers my projects — from front-end polish to solid back-end foundations.',
                skillsAdvanced: 'Advanced',
                skillsIntermediate: 'Intermediate',
                skillsBeginner: 'Beginner',
                // Projects Section
                projectsTitle: 'My Projects',
                projectsSubtitle: "Here are a few highlights from my recent work — projects that reflect my approach to building clean, user-focused digital experiences.",

                projectTitle1: 'My Portfolio Website',
                projectDesc1: 'I built the portfolio website using React, HTML, CSS, and JavaScript. It features a light, minimalist style with smooth animations using Framer Motion and is fully responsive — looking great on any device. The project focuses on clarity, an intuitive layout, and polished details that give it a unique and engaging character. It also offers both dark and light themes, depending on the user’s preference, and includes the option to switch between English and Polish languages.',

                projectTitle2: 'WeatherVibes',
                projectDesc2: 'A weather website that displays animations and information based on the current weather. The site uses the OpenWeather API. The interface is simple and user-friendly, with a focus on clarity and aesthetics. It is also fully responsive, so it works well on all devices.',

                projectTitle3: 'BluCube Rush',
                projectDesc3: 'Small dino-like browser runner game built with pure HTML, CSS, and JavaScript. Control a blue character, jump over ground enemies, crouch under flying ones, and try to achieve the best score. The game features simple animations, collision detection, and sound effects. That is my first JS project made a year ago, I have added this to my portfolio to show my early learning and experimentation with JS.',

                projectTitle4: 'myBodyFit',
                projectDesc4: 'A health and fitness tracking app that helps users monitor BMI, ideal weight, and other key body metrics. Its simple and user-friendly interface provides quick insights into physical health and supports informed decisions for a balanced lifestyle. The app is available in several popular languages and offers multiple color themes to choose from. Currently, it is available only on Android devices. It was built using Flutter with the Dart programming language.',

                projectLinkSpan1: ' View on GitHub',
                projectLinkSpan2: ' Coming soon...',
                projectLinkSpan3: ' View on Play Store ',
                // Contact Section
                contactTitle: 'Get in touch with me',
                contactSubtitle: 'I\'m currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out! You can contact me via email or connect with me on LinkedIn. I look forward to hearing from you!',
                contactInfoCard1: 'Poland, Europe (remote work preferred)',
                contactInfoCard2: 'I\'m a student, so my availability on weekends may be limited',
                // FAQ Section 
                faqTitle: "[ FAQ ]",
                faqSubtitle: "Here are some common questions I receive, along with their answers. If you have any other questions, feel free to reach out!",
                faqCardLabel1: "What technologies do I prefer in Web Development?",
                faqCardContent1: "I mainly work with HTML, CSS, JavaScript and React, but I also know some basics in PHP, and MySQL for databases control.",
                faqCardLabel2: "Are you open to remote work opportunities?",
                faqCardContent2: "Yes, I am open to remote work opportunities and have experience collaborating with remote teams.",
                faqCardLabel3: "How long does it usually take you to complete a project?",
                faqCardContent3: "The duration depends on the complexity and scope, but I always aim to deliver high-quality results efficiently.",
                faqCardLabel4: "Do you take on small or hobby projects?",
                faqCardContent4: "Yes! I'm open to both professional and smaller creative projects, as long as the timeline is manageable.",
                // Footer Section
                footer: "© 2025 Hubert Banach. All rights reserved. ",
            }
        },
        pl: {
            translation: {
                // Navbar
                home: "Start",
                aboutMe: "O mnie",
                skills: "Umiejętności",
                projects: "Projekty",
                contact: "Kontakt",
                // Hero Section
                heroGreeting: "Cześć, jestem ",
                heroTitle: "Hubert Banach",
                heroSubtitle: "Front-end & Mobile Developer",
                heroDesc: "Tworzę strony, które są szybkie, responsywne i po prostu przyjemne w użyciu — żeby Twój produkt dobrze wyglądał i działał płynnie na każdym urządzeniu.",
                heroButton1: "Zobacz CV",
                heroButton2: "Moje projekty",
                popupButton1: 'Pobierz',
                popupButton2: 'Wydrukuj',
                // About Me Section
                aboutMeTitle: 'Trochę o mnie',
                aboutMeTextP1: 'Mam na imię',
                aboutMeTextP2: ', mam 20 lat i jestem informatykiem oraz juniorem programistą, który kocha web development i tworzenie aplikacji mobilnych, które wyglądają dobrze i działają płynnie. Studiuję aktualnie informatykę na',
                aboutMeTextP3: ' w Poznaniu, skończyłem technikum o profilu IT (posiadam kwalifikacje zawodowe Technik Informatyk oraz Technik Programista). Uwielbiam uczyć się nowych technologii i podnosić swoje umiejętności zarówno w programowaniu, jak i ogólnej informatyce. Od zawsze interesuję się też budową i naprawą komputerów oraz laptopów, pierwszy swój komputer złożyłem mając 12 lat jeszcze przed pójściem do technikum. Naprawiałem też sporo telefonów (wymiana baterii, wyświetlacza itp.). W wolnym czasie poza stronami internetowymi, tworzę także aplikacje mobilne we Flutterze. A jak nie ma mnie przy komputerze, to znaczy, że siedzę na rybach, grzebię w samochodzie albo gram w koszykówkę.',
                aboutMeEnd: 'Szukasz kogoś, kto ogarnia front, mobile albo informatykę? Odezwij się!',
                aboutMeCardTitle1: 'Edukacja',
                aboutMeCardContent1P1: '- Technikum, zawód IT,',
                aboutMeCardContent1P2: '- Collegium da Vinci w Poznaniu, profil IT',
                aboutMeCardTitle2: 'Języki',
                aboutMeCardContent2P1: '- Angielski (B2),',
                aboutMeCardContent2P2: '- Polski (ojczysty)',
                aboutMeCardTitle3: 'Zainteresowania',
                aboutMeCardContent3P1: '- Web development (HTML, CSS, JS, React),',
                aboutMeCardContent3P2: '- Aplikacje mobilne we Flutterze,',
                aboutMeCardContent3P3: '- Stare japońskie auta, koszykówka i wędkowanie',
                aboutMeCardTitle4: 'Co mnie napędza',
                aboutMeCardContent4: 'Największą frajdę mam, gdy mój kod działa i widać efekty. Uwielbiam tworzyć strony, które wyglądają świetnie i są wygodne w użyciu — żeby ludzie naprawdę chcieli z nich korzystać.',
                // Skills Section
                skillsTitle: 'Umiejętności',
                skillsSubtitle: 'Technologie, które napędzają moje projekty — od front-endowego dopieszczenia po solidne fundamenty back-endu.',
                skillsAdvanced: 'Zaawansowany',
                skillsIntermediate: 'Średnio - zaawansowany',
                skillsBeginner: 'Podstawowy',
                // Projects Section
                projectsTitle: 'Moje Projekty',
                projectsSubtitle: 'Kilka wyróżniających się projektów z ostatniego czasu — pokazujących, jak podchodzę do tworzenia przejrzystych, przyjaznych dla użytkownika doświadczeń.',

                projectTitle1: 'Moja strona portfolio',
                projectDesc1: 'Stronę portfolio napisałem w React, HTML, CSS i JavaScript. Z lekkim, minimalistycznym stylem, płynnymi animacjami używając Framer-Motion i pełną responsywnością — wygląda świetnie na każdym urządzeniu. Projekt stawia na przejrzystość, intuicyjny układ i dopracowane detale, które nadają mu unikalny i angażujący charakter. Posiada także ciemny i jasny motyw do wyboru, zależnie od preferencji użytkownika. Jest także możliwość zmiany języka między angielskim a polskim.',

                projectTitle2: 'WeatherVibes',
                projectDesc2: 'Strona pogodowa, która pokazuje animacje i informacje zależnie od aktualnej pogody. Strona korzysta z API OpenWeather. Interfejs jest prosty i przyjemny w użyciu, a projekt skupia się na przejrzystości i estetyce. Jest także w pełni responsywna, więc działa świetnie na wszystkich urządzeniach.',

                projectTitle3: 'BluCube Rush',
                projectDesc3: 'Mała gra typu dino w przeglądarce, stworzona w czystym HTML, CSS i JavaScript. Sterujesz niebieskim bohaterem, przeskakujesz wrogów lub kucasz pod nimi i starasz się zdobyć jak najwyższy wynik. Gra posiada proste animacje, detekcję kolizji i efekty dźwiękowe. To mój pierwszy projekt w JS, stworzony rok temu, dodałem go do portfolio, aby pokazać moją wczesną naukę i eksperymentowanie z JS.',

                projectTitle4: 'myBodyFit',
                projectDesc4: 'Aplikacja do śledzenia zdrowia i kondycji, pomagająca użytkownikom kontrolować BMI, idealną wagę i inne kluczowe wskaźniki ciała. Prosty i przyjazny interfejs zapewnia szybki wgląd w zdrowie fizyczne i wspiera świadome decyzje dla zrównoważonego stylu życia. Dostępna jest w kilku najpopularniejszych językach oraz ma wiele motywów kolorystycznych do wyboru. Aplikacja jest dostępna (jak narazie) tylko na urządzenia z Androidem. Została napisana we Flutterze z pomocą języka Dart.',

                projectLinkSpan1: ' Zobacz na GitHub',
                projectLinkSpan2: ' Wkrótce...',
                projectLinkSpan3: ' Zobacz w Play Store',
                // Contact Section
                contactTitle: 'Skontaktuj się ze mną',
                contactSubtitle: 'Aktualnie jestem otwarty na nowe projekty i współpracę. Masz pytanie, pomysł na projekt albo po prostu chcesz powiedzieć cześć? Śmiało napisz! Możesz skontaktować się ze mną poprzez e-mail lub połączyć na LinkedIn. Czekam na wiadomość od Ciebie!',
                contactInfoCard1: 'Polska, Europa (preferuję pracę zdalną)',
                contactInfoCard2: 'Studiuję, więc w weekendy moja dostępność może być ograniczona',
                // FAQ Section
                faqTitle: '[ FAQ ]',
                faqSubtitle: 'Oto kilka często zadawanych pytań i moje odpowiedzi. Masz inne pytanie? Śmiało napisz!',
                faqCardLabel1: 'Jakie technologie preferuję w web developmencie?',
                faqCardContent1: 'Głównie pracuję z React, CSS lub Tailwind CSS, JavaScript, ale znam też podstawy PHP oraz MySQL do zarządzania bazami danych.',
                faqCardLabel2: 'Czy jesteś otwarty na pracę zdalną?',
                faqCardContent2: 'Tak, preferuję pracę zdalną lub hybdrydową, ze względu na moje aktualne miejsce zamieszkania.',
                faqCardLabel3: 'Ile zwykle zajmuje Ci ukończenie projektu?',
                faqCardContent3: 'To zależy od złożoności i zakresu projektu, ale zawsze staram się dostarczać wysokiej jakości rezultaty w efektywnym czasie.',
                faqCardLabel4: 'Czy bierzesz się też za małe lub hobbystyczne projekty?',
                faqCardContent4: 'Tak! Jestem otwarty zarówno na profesjonalne, jak i mniejsze kreatywne projekty, o ile harmonogram jest realistyczny.',
                // Footer Section
                footer: '© 2025 Hubert Banach. Wszelkie prawa zastrzeżone.',
            }
        }
    }
})

export default i18n;