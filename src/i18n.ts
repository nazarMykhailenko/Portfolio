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
}

const resources = {
	[LanguageCodes.ENG]: {
		translation: {
			[TranslationKeys.NAME]: 'Nazar Mykhailenko',
			[TranslationKeys.YEARS_OLD]: 'yo',
			[TranslationKeys.DEVELOPER]: 'developer',
			[TranslationKeys.ABOUT_ME]: 'About me',
			[TranslationKeys.INFO]:
				'I am a web developer based in Oxford, with extensive experience in building and optimizing websites. My portfolio showcases a range of successful projects that highlight my expertise in web development.',
			[TranslationKeys.DOWNLOAD_CV]: 'Download CV',
			[TranslationKeys.WEB_DEVELOPMENT]: 'Web Development',
			[TranslationKeys.WEB_OPTIMIZATION]: 'Web Optimization',
			[TranslationKeys.BACKEND]: 'Back-end',
			[TranslationKeys.FINISHED_PROJECTS]: 'Finished projects',
			[TranslationKeys.HAPPY_CLIENTS]: 'Happy clients',
			[TranslationKeys.CUPS_OF_COFFEE]: 'Cups of coffee drunk',
		},
	},
	[LanguageCodes.RU]: {
		translation: {
			[TranslationKeys.NAME]: 'Назар Михайленко',
			[TranslationKeys.YEARS_OLD]: 'лет',
			[TranslationKeys.DEVELOPER]: 'разработчик',
			[TranslationKeys.ABOUT_ME]: 'Обо мне',
			[TranslationKeys.INFO]:
				'Я веб-разработчик из Киева с обширным опытом в создании сайтов и их оптимизации. В моем портфолио представлено множество успешно завершенных проектов, подчеркивающих мои навыки в веб-разработке.',
			[TranslationKeys.DOWNLOAD_CV]: 'Скачать резюме',
			[TranslationKeys.WEB_DEVELOPMENT]: 'Веб Pазработка',
			[TranslationKeys.WEB_OPTIMIZATION]: 'Оптимизация Сайтов',
			[TranslationKeys.BACKEND]: 'Back-end',
			[TranslationKeys.FINISHED_PROJECTS]: 'Завершенных проектов',
			[TranslationKeys.HAPPY_CLIENTS]: 'Довольных клиентов',
			[TranslationKeys.CUPS_OF_COFFEE]: 'Выпитых чашек кофе',
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
