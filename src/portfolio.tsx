import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Selene Park',
	title: 'Hello I\'m Selene Park',
	subTitle: emoji("Currenly working on own project with TS and React with Node.js + AWS 🤞🏻"),
	role: "",
	resumeLink: "https://www.notion.so/SELENE-0adf62e4422348afa46785c422c1dfda",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/dmstlf292',
	linkedin: '',
	email: 'silviapark292@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "subtitle for skill",
	describeSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: false
};

export const experience = {
	title: "Work Experience 👩🏻‍💻",
	lists: [
		{
			date: "2019.02 ~ 2020.08 ",
			company: "Impex GLS Mexico",
			role: "Forwarder - Operation(Expo) and Customer Service Based on Spanish and English",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects published on AWS 🙊"),
	subTitle: "Finished Project - Click and Just have a look! ",
	lists: [
		{
			title: "Twiter Clone Coding",
			desc: "Learned at Udemy. Worked on Pug, JavaScript, Node.js, MongoDB, Socket.IO, and Published at AWS.",
			url: "http://3.34.1.185:3003/"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Blog and GitHub 📝"),
	subTitle: "",
	lists: [
		{
			title: "IT Studing Blog",
			desc: "Tstory",
			url: "https://milugarcito.tistory.com/"
		},
		{
			title: "My git repository",
			desc: "Github",
			url: "https://github.com/dmstlf292"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Feel free to contact me! 📱",
	subTitle: "+10 9157 3018",
	introduce: emoji("your introduce❤"),
	view: false
}