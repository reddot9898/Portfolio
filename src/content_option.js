import yourImage from './pages/profile-pic.jpg'
import techBlog from './pages/tech-blog.jpg'
import bookSearch from './pages/booksearch.png'
import weatherImage from './pages/weatherstack-forecast.webp'
import eCommerce from './pages/ecommerce.jpg'
import textEditor from './pages/texteditor.gif'

const logotext = "Home";
const meta = {
    title: "Randyn Collins",
    description: "I’m John Doe data scientist _ Full stack developer,currently working in Berlin",
};

const introdata = {
    title: "Randyn Collins",
    animated: {
        first: "I'm a full stack web developer",
        second: "I'm looking to make an impact at your company",
        third: "Thank you for checking out my portfolio ! ",
    },
    description: "",
    your_img_url: yourImage,
};

const dataabout = {
    title: " Who Am I",
    aboutme: "Hello, I'm Randyn Collins, a aspiring junior web developer eager to make my mark in the world of web development. I'm passionate about creating innovative web applications and continuously expanding my knowledge in this dynamic field. My journey into web development began during my time at The University Of Texas At Austin, where I attended the Full Stack Web Development Course. Throughout my academic journey, I developed a strong foundation in programming, web technologies, and problem-solving skills that ignited my passion for coding. Web development allows me to blend my creativity with technical skills to build user-friendly and interactive websites and applications. I'm fascinated by the limitless possibilities of the digital world and the potential to bring ideas to life through code. "
};

const databout2 = {
    title: " Personal",
    aboutme2: "I currently reside in Jacksonville, North Carolina with my beautiful wife Alana and amazing daughter Ella. When im not working on developing my skills as a coder, I'll most likely be in my garage building engines or spending time with my family at the beach. I'm a veteran of the United States Marine Corps and have a special interest in working with any organizations that aim to help and assist fellow Veterans"


};
const worktimeline = [{
    jobtitle: " Motorcycle Technician",
    where: "Ready To Ride",
    date: "2021-2023",
},
{
    jobtitle: "1391 Bulk Fuel Specialist",
    where: "United States Marine Corps",
    date: "2018-2021",
},
{
    jobtitle: " Construction Laborer",
    where: "Short Construction",
    date: "2016-2018",
},
];

const skills = [{
    name: "Javascript",
    value: 100,
},
{
    name: "HTML",
    value: 100,
},
{
    name: "CSS",
    value: 100,
},
{
    name: "React",
    value: 100,
},
{
    name: "MongoDB",
    value: 90,
},
{
    name: "GIT",
    value: 80,
},
{
    name: "GitHub",
    value: 90,
},
{
    name: "NoSql",
    value: 85,
},
{
    name: "MySql",
    value: 85,
},
];

const services = [{
    title: "Front End Dev",
    description: "Create and design responsive and visually appealing websites for individuals or businesses.Customize existing websites to enhance their user interface and user experience.",
},
{
    title: "Back End Dev",
    description: "Create and maintain server-side applications and APIs to handle data processing, authentication, and business logic.Design and manage databases using technologies like MySQL, PostgreSQL, MongoDB, or Firebase.Ensure data integrity, security, and efficient data retrieval.",
},
{
    title: "React Creator",
    description: "Develop user interfaces and interactive web applications using React.Create and maintain components to build the front end of web applications.Design and build reusable React components that enhance the user interface and user experience.",
},
];

const dataportfolio = [{
    img: techBlog,
    description: " Simple Tech Blog App Built with MySQL and JavaScript,  Users can create accounts, publish articles, engage in discussions, and stay updated on the latest tech trends. ",
    link: "https://github.com/reddot9898/tech-blog",
},
{
    img: bookSearch,
    description: "This is a MERN stack (MongoDB, Express.js, React.js, Node.js) application that searches Google Books for a given book title, then displays the results.  ",
    link: "https://github.com/reddot9898/book-search-engine",
},
{
    img: weatherImage,
    description: "This WeatherAPI App is a powerful and user-friendly tool for accessing current weather conditions and forecasts.",
    link: "https://github.com/reddot9898/weather-api-tracker",
},
{
    img: eCommerce,
    description: "This project was to build the back end for an e-commerce website. We were provided basic starter code and had to configure all data base, express, api, sequelize and mysql data base.",
    link: "https://github.com/reddot9898/e-commerce-app",
},
{
    img: textEditor,
    description: "The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use.",
    link: "https://github.com/reddot9898/text-editor",
},

];

const contactConfig = {
    YOUR_EMAIL: "randyncollins4@gmail.com",
    YOUR_FONE: "304-663-7617",
    description: "Feel free to get in touch with me anytime. Whether you have questions, project inquiries, or just want to say hello, I'm here to connect. You can reach out through the provided contact form, email, or connect with me on social media. I'm excited to hear from you and explore how we can collaborate! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_m3kmlol",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",

};

const socialprofils = {
    github: "https://github.com/reddot9898",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/feed/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    databout2,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};