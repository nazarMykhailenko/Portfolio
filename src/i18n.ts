import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum LanguageCodes {
	ENG = 'eng',
	RU = 'ru',
}

export enum TranslationKeys {
	NAME = 'name',
	YEARS_OLD = 'years_old',
	DEVELOPER = 'developer',
	ABOUT_ME = 'about_me',
	INFO = 'info',
	DOWNLOAD_CV = 'download_cv',
	WEB_DEVELOPMENT = 'web_development',
	WEB_OPTIMIZATION = 'web_optimization',
	BACKEND = 'BACKEND',
	FINISHED_PROJECTS = 'finished_projects',
	HAPPY_CLIENTS = 'happy_clients',
	CUPS_OF_COFFEE = 'cups_of_coffee',
	SERVICES = 'services',
	EXPERIENCE = 'experience',
	MATH_SCHOOL = 'math_school',
	MATH_SCHOOL_TEXT = 'math_school_text',
	CAREER_START = 'career_start',
	CAREER_START_TEXT = 'career_start_text',
	NOW = 'now',
	COURSES = 'courses',
	COURSES_TEXT = 'courses_text',
	SEPTEMBER = 'september',
	FIRST_EXPERIENCE = 'first_experience',
	FIRST_EXPERIENCE_TEXT = 'first_experience_text',
	COMMERCIAL_EXPERIENCE = 'commercial_experience',
	COMMERCIAL_EXPERIENCE_TEXT = 'commercial_experience_text',
	ALL = 'all',
	PROJECTS = 'projects',
	THANKS = 'thanks',
}

const resources = {
	[LanguageCodes.ENG]: {
		translation: {
			[TranslationKeys.NAME]: 'Nazar Mykhailenko',
			[TranslationKeys.YEARS_OLD]: 'yo',
			[TranslationKeys.DEVELOPER]: 'developer',
			[TranslationKeys.ABOUT_ME]: 'About me',
			[TranslationKeys.INFO]:
				'I am a web developer based in Oxford, with extensive experience in building and optimizing websites. My portfolio showcases a range of successful projects that highlight my expertise in web development',
			[TranslationKeys.DOWNLOAD_CV]: 'Download CV',
			[TranslationKeys.WEB_DEVELOPMENT]: 'Web Development',
			[TranslationKeys.WEB_OPTIMIZATION]: 'Web Optimization',
			[TranslationKeys.BACKEND]: 'Back-end',
			[TranslationKeys.FINISHED_PROJECTS]: 'Finished projects',
			[TranslationKeys.HAPPY_CLIENTS]: 'Happy clients',
			[TranslationKeys.CUPS_OF_COFFEE]: 'Cups of coffee drunk',
			[TranslationKeys.SERVICES]: 'Services',
			[TranslationKeys.EXPERIENCE]: 'Experience',
			[TranslationKeys.MATH_SCHOOL]: 'Math school',
			[TranslationKeys.MATH_SCHOOL_TEXT]:
				'Studying at a math-focused high school sparked my passion for the exact sciences, including programming. The high-quality education and attentive guidance of my teachers helped me significantly enhance my skills in solving complex problems',
			[TranslationKeys.CAREER_START]: 'Career start',
			[TranslationKeys.CAREER_START_TEXT]:
				'Writing the first “Hello world!” program',
			[TranslationKeys.NOW]: 'now',
			[TranslationKeys.COURSES]: 'Courses',
			[TranslationKeys.COURSES_TEXT]:
				'I regularly take various self-development courses on YouTube to enhance my skills and knowledge',
			[TranslationKeys.SEPTEMBER]: 'September',
			[TranslationKeys.FIRST_EXPERIENCE]: 'First team experience',
			[TranslationKeys.FIRST_EXPERIENCE_TEXT]:
				'I collaborated with a friend on a travel app, marking my first experience with team development. This project helped me develop teamwork skills and improve my ability to collaborate effectively with other developers, while also enhancing my technical problem-solving abilities in a group setting',
			[TranslationKeys.COMMERCIAL_EXPERIENCE]: 'Commercial experience',
			[TranslationKeys.COMMERCIAL_EXPERIENCE_TEXT]:
				'I began freelancing in commercial development, working on three key projects: an app for business owners, a CRM platform, and an inventory monitoring system. These experiences allowed me to further develop my web development skills and optimize business solutions',
			[TranslationKeys.ALL]: 'All',
			[TranslationKeys.PROJECTS]: 'Projects',
			[TranslationKeys.THANKS]: 'Thanks for your attention',
		},
	},
	[LanguageCodes.RU]: {
		translation: {
			[TranslationKeys.NAME]: 'Назар Михайленко',
			[TranslationKeys.YEARS_OLD]: 'лет',
			[TranslationKeys.DEVELOPER]: 'разработчик',
			[TranslationKeys.ABOUT_ME]: 'Обо мне',
			[TranslationKeys.INFO]:
				'Я веб-разработчик из Киева с обширным опытом в создании сайтов и их оптимизации. В моем портфолио представлено множество успешно завершенных проектов, подчеркивающих мои навыки в веб-разработке',
			[TranslationKeys.DOWNLOAD_CV]: 'Скачать резюме',
			[TranslationKeys.WEB_DEVELOPMENT]: 'Веб Pазработка',
			[TranslationKeys.WEB_OPTIMIZATION]: 'Оптимизация Сайтов',
			[TranslationKeys.BACKEND]: 'Back-end',
			[TranslationKeys.FINISHED_PROJECTS]: 'Завершенных проектов',
			[TranslationKeys.HAPPY_CLIENTS]: 'Довольных клиентов',
			[TranslationKeys.CUPS_OF_COFFEE]: 'Выпитых чашек кофе',
			[TranslationKeys.SERVICES]: 'Сервисы',
			[TranslationKeys.EXPERIENCE]: 'Опыт',
			[TranslationKeys.MATH_SCHOOL]: 'Математический лицей',
			[TranslationKeys.MATH_SCHOOL_TEXT]:
				'Обучение в математическом лицее пробудило во мне любовь к точным наукам, включая программирование. Качественное образование и внимательный подход учителей помогли существенно развить навыки решения сложных задач',
			[TranslationKeys.CAREER_START]: 'Начало карьеры',
			[TranslationKeys.CAREER_START_TEXT]:
				'Пишу первую "Hello world!" страничку',
			[TranslationKeys.NOW]: 'настоящее время',
			[TranslationKeys.COURSES]: 'Курсы',
			[TranslationKeys.COURSES_TEXT]:
				'Прохожу различные курсы с ютуба, саморазвиваюсь',
			[TranslationKeys.SEPTEMBER]: 'Сентябрь',
			[TranslationKeys.FIRST_EXPERIENCE]: 'Первый опыт в команде',
			[TranslationKeys.FIRST_EXPERIENCE_TEXT]:
				'Я работал над приложением для путешествий вместе с другом, что стало моим первым опытом командной разработки. Этот проект позволил мне научиться эффективно работать в команде и улучшить взаимодействие с другими разработчиками',
			[TranslationKeys.COMMERCIAL_EXPERIENCE]: 'Коммерческий опыт',
			[TranslationKeys.COMMERCIAL_EXPERIENCE_TEXT]:
				'Начал заниматься коммерческой разработкой на фрилансе, работая над тремя проектами: приложением для владельцев бизнеса, CRM-платформой и системой мониторинга товарных запасов. Эти проекты помогли мне развить навыки веб-разработки и оптимизации бизнес-решений',
			[TranslationKeys.ALL]: 'Все',
			[TranslationKeys.PROJECTS]: 'Проекты',
			[TranslationKeys.THANKS]: 'Спасибо за внимание',
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: LanguageCodes.ENG, // default language
	fallbackLng: LanguageCodes.ENG, // fallback language in case a translation is missing
	interpolation: {
		escapeValue: false, // React already escapes values
	},
})

export default i18n
