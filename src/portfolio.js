/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji'
import splashAnimation from './assets/lottie/splashAnimation' // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
	enabled: true, // set false to disable splash screen
	animation: splashAnimation,
	duration: 2000, // Set animation duration as per your animation
}

// Summary And Greeting Section

const illustration = {
	animated: true, // Set to false to use static SVG
}

const greeting = {
	username: 'Nilavya',
	logo: 'nilavya',
	title: "Hi all, I'm Nilavya",
	subTitle: emoji(
		"I’m Nilavya Das, a 24-year-old Data Analyst with 2+ years of experience, leading data analytics at CashPe Agri Retail Pvt Ltd. I specialize in Python-driven analytics, machine learning, and data visualization. Passionate about mentoring and tech community engagement, I've co-led HackClub SIT and co-trained the sahajBERT language model. Currently, I’m exploring RAG and AI agents. Let’s connect to see how data can drive your next success.",
	),
	resumeLink:
		'https://drive.google.com/file/d/1ikwvmS2eUfaZ-Wdcal0gYQFdC9NUR1H4/view?usp=sharing', // Set to empty to hide the button
	displayGreeting: true, // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
	gmail: 'dnilavya@gmail.com',
	github: 'https://github.com/nilavya2000',
	linkedin: 'https://www.linkedin.com/in/nilavya-das/',
	twitter: 'https://twitter.com/Nilavya1',
	// gitlab: "https://gitlab.com/saadpasta",
	// facebook: "https://www.facebook.com/saad.pasta7",
	medium: 'https://dev.to/nilavya2000',

	// stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia
	display: true, // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
	title: 'What I do 👀',
	subTitle:
		'Nilavya Das, a skilled data analyst, transforms raw data into captivating insights that drive decisive action and illuminate pathways to success.',
	skills: [
		emoji('⚡ Decoding complex datasets to reveal strategic insights that drive business growth.'),
		emoji('⚡ Creating compelling data visualizations that prompt decisive action.'),
		emoji(
			'⚡ Translating technical findings into impactful insights, making them accessible to all stakeholders.',
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: 'python',
			fontAwesomeClassname: 'fab fa-python',
		},
		{
			skillName: 'sql-database',
			fontAwesomeClassname: 'fas fa-database',
		},
		{
			skillName: 'Excel',
			fontAwesomeClassname: 'fas fa-file-excel',
		},
		{
			skillName: 'Power BI',
			fontAwesomeClassname: 'fas fa-chart-pie',
		},
		{
			skillName: 'pandas',
			fontAwesomeClassname: 'fas fa-code',
		},
		{
			skillName: 'numpy',
			fontAwesomeClassname: 'fas fa-calculator',
		},
		{
			skillName: 'seaborn',
			fontAwesomeClassname: 'fas fa-chart-bar',
		},
		{
			skillName: 'Jupyter Notebook',
			fontAwesomeClassname: 'fas fa-laptop-code',
		},
		{
			skillName: 'Git',
			fontAwesomeClassname: 'fas fa-code-branch',
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
	display: false, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'Harvard University',
			logo: require('./assets/images/harvardLogo.png'),
			subHeader: 'Master of Science in Computer Science',
			duration: 'September 2017 - April 2019',
			desc: 'Participated in the research of XXX and published 3 papers.',
			descBullets: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			],
		},
		{
			schoolName: 'Stanford University',
			logo: require('./assets/images/stanfordLogo.png'),
			subHeader: 'Bachelor of Science in Computer Science',
			duration: 'September 2013 - April 2017',
			desc: 'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
			descBullets: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			],
		},
	],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Programming and Data Analysis ', //Insert stack or technology you have experience in
			progressPercentage: '95%', //Insert relative proficiency in percentage
		},
		{
			Stack: 'Data Visualization and Reporting',
			progressPercentage: '85%',
		},
		{
			Stack: 'Machine Learning and Deep Learning',
			progressPercentage: '75%',
		},
		{
			Stack: 'Development and Version Control',
			progressPercentage: '60%',
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
}

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		
		{
			role: 'Lead Data Analyst',
			company: 'CashPe Agri Retail Pvt Ltd',
			companylogo: require('./assets/images/Farmguru.jpg'),
			date: 'May 2023 – present',
			desc: 'I mentored 5 interns in market research, leading to 4 strategic initiatives that boosted customer satisfaction by 12%. Utilizing Natural Language Processing (NLP), I analyzed 10,000 customer calls, identifying 30% negative sentiment for Product X and successfully reversing 15% of it within 3 months. Additionally, I automated reporting processes using Python and Pandas, saving 20 hours per month and allowing for deeper, more insightful analysis.',
		},
		{
			role: 'Data Analyst',
			company: 'CashPe Agri Retail Pvt Ltd',
			companylogo: require('./assets/images/Farmguru.jpg'),
			date: 'Aug 2022 – May 2023',
			desc: 'I implemented data-driven sales analysis strategies that resulted in a 20% profit increase in Q4, surpassing annual targets by 15%. Additionally, I developed a Flask-based Address Verification Tool with 98% accuracy, reducing product returns by 15%. I also created an automated lead assignment system, cutting response time by 2 hours and improving sales advisor efficiency by 15%.',
		},
		{
			role: 'Banking Analytics Consultant',
			company: 'CSB Bank Limited',
			companylogo: require('./assets/images/CSB_Bank.jpg'),
			date: 'Feb 2024 – Jul 2024',
			desc: 'As a Freelance Banking Data Analyst specializing in Python-driven analytics, I streamline banking operations by transforming complex data into actionable insights. My expertise in data analysis helps financial institutions make informed decisions, optimize processes, and drive growth. By leveraging Python, I uncover hidden patterns in financial data, enabling banks to enhance their strategies and achieve sustainable success.',
			descBullets: [],
		}
	],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
	display: false, // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
	title: 'Projects 👨‍💻',
	subtitle: '',
	projects: [
		{
			image: require('./assets/images/Netflix.jpeg'),
			projectName:
				'Netflix Decoded: Python, Personalised Recommendations',
			projectDesc:
				'Utilized data analysis, visualization with Matplotlib and Seaborn, and NLP techniques to uncover Netflix trends, develop content recommenders, and personalize recommendations for a vast audience.',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/nilavya2000/DataAnalysis_of_NetflixContents',
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require('./assets/images/flightPrice.jpeg'),
			projectName: 'Flight Price Prediction',
			projectDesc:
				'Built a machine learning-driven web application with Python/Flask, achieving 77% accuracy in predicting flight prices, empowering users with data-driven travel decisions and a seamless interface.',
			footerLink: [
				{
					name: 'View Project',
					url: 'https://github.com/nilavya2000/Flight_Price_Prediction',
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji('Achievements And Certifications 🏆 '),
	subtitle:
		'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

	achievementsCards: [
		{
			title: 'sahajBERT',
			subtitle:
				'Co-trained SahajBERT, a Bengali language model, leveraging Masked Language Modeling and Sentence Order Prediction to advance text comprehension capabilities.',
			image: require('./assets/images/huggingFace.png'),
			imageAlt: 'huggingFace',
			footerLink: [
				{
					name: 'View Model',
					url: 'https://huggingface.co/neuropark/sahajBERT?text=%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8%E0%A7%87+%E0%A6%B8%E0%A6%AC%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A7%87+%E0%A6%AE%E0%A7%82%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%A8+%E0%A6%9C%E0%A6%BF%E0%A6%A8%E0%A6%BF%E0%A6%B8+%E0%A6%B9%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87+%5BMASK%5D%E0%A5%A4',
				},
			],
		},
		{
			title: 'Co-Lead of HackClub SIT',
			subtitle:
				'Delivered impactful training sessions for over 100 students about machine learning and also hosted seminars on data science.',
			image: require('./assets/images/hackClub.png'),
			imageAlt: 'HackClub',
			footerLink: [
				{
					name: 'HackClub',
					url: 'https://hacktoberfest.com/',
				},
			],
		},

		{
			title: 'HacktoberFest Contributor',
			subtitle:
				"Contributed to open-source projects, expanding Python's capabilities in data structures, algorithms, and visualizations.",
			image: require('./assets/images/hacktoberFest.jpg'),
			imageAlt: 'HacktoberFest Logo',
			footerLink: [
				{
					name: 'HacktoberFest',
					url: 'https://hacktoberfest.com/',
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

// Blogs Section

const blogSection = {
	title: 'Blogs 📚',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
	displayMediumBlogs: 'true', // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: 'https://dev.to/nilavya2000/neural-networks-building-a-brain-from-scratch-1c3h',
			title: "Neural Networks: Building a 'Brain' from Scratch",
			description:
				'Ever wondered how computers learn? My new blog explores the fascinating world of neural networks, breaking down complex concepts in a fun and interactive way!',
		},
		{
			url: 'https://dev.to/nilavya2000/what-is-prompt-engineering-4nd8',
			title: 'What is Prompt Engineering?',
			description:
				"Unravelling the mysteries of Prompt Engineering, a fascinating technique that gives us the power to guide AI's behaviour and make it do some pretty amazing tricks.",
		},
		{
			url: 'https://dev.to/nilavya2000/bias-variance-jgi',
			title: 'Bias & Variance',
			description:
				'In machine learning, these 2 words are mostly used. So today let’s talk about it.',
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

// Talks Sections

const talkSection = {
	title: 'TALKS',
	subtitle: emoji(
		'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅',
	),

	talks: [
		{
			title: 'Build Actions For Google Assistant',
			subtitle: 'Codelab at GDG DevFest Karachi 2019',
			slides_url: 'https://bit.ly/saadpasta-slides',
			event_url: 'https://www.facebook.com/events/2339906106275053/',
		},
	],
	display: false, // Set false to hide this section, defaults to true
}

// Podcast Section

const podcastSection = {
	title: emoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

	// Please Provide with Your Podcast embeded Link
	podcast: [
		'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
	],
	display: false, // Set false to hide this section, defaults to true
}

const contactInfo = {
	title: emoji('Contact Me ☎️'),
	subtitle:
		'Discuss a project or just want to say hi? My Inbox is open for all.',
	// number: "+917029468173",
	email_address: 'dnilavya@gmail.com',
}

// Twitter Section

const twitterDetails = {
	userName: 'twitter', //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
}

const isHireable = true // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable,
}
