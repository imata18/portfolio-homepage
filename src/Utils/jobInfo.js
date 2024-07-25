import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default {
    name: 'Ivan Mata',
    title: 'Recent MS Graduate | Administrative Assistant',

    birthday: 'August 18th, 1999',
    email: 'imata@bu.edu',
    phone: '(713) 870-2036',
    address: 'Boston, MA, USA',

    socials: {
        Github: {
            link: 'https://github.com/imata18',
            text: 'imata18',
            icon: <GitHubIcon/>
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/ivan-mata-574608174/',
            text: 'ivan-mata-574608174',
            icon: <LinkedInIcon/>
        },
        Instagram: {
            link: 'https://www.instagram.com/piyoz18/',
            text: '@piyoz18',
            icon: <InstagramIcon/>
        }
    },

    aboutMe:
        "As an Technical Administrative Specialist at Real Estate Management & Investment LLC (REMI), I leverage my computer science skills and knowledge to improve the efficiency and accuracy of the company's data and document management. I have created Google Scripts to automate the creation of tenant and lease documents, and utilized Google Sheet equations to facilitate the updating of available, renewed, or sublet units. I also assist in inspecting apartments and creating reports for any maintenance jobs, using my attention to detail and organizational skills. \n\nI have a master's degree in computer science from Boston University, where I also completed my bachelor's degree in linguistics and computer science. During my studies, I gained six years of experience in Java, Kotlin, Ruby on Rails, SQL, and Python, and developed several Android applications that are showcased on my GitHub page. I also worked as a teaching assistant, where I reviewed and graded code, provided feedback, and managed the course learning system. I am passionate about coding and learning new technologies, and I am always eager to apply my skills to real-world problems and challenges."
    ,
    experiences: [
        {
            title: 'Technical Administrative Specialist',
            company: 'Real Estate Management & Investment LLC',
            date: 'Oct. 2023 - Present',
            description: '• Streamlined tenant information management by inputting and updating data in both physical and digital filing systems, resulting in enhanced accuracy and accessibility' +
                         '\n• Automated document creation by developing Google Scripts, reducing manual effort by 90% and reducing the time spent generating tenant and lease documents by 95%' + 
                         '\n• Enhanced property maintenance reporting by assisting in apartment inspections and creating detailed reports, leading to quicker identification and resolution of maintenance issues' + 
                         '\n• Optimized unit status updates by utilizing Google Sheet equations, improving tracking efficiency and reducing errors by 20%, resulting in a more accurate and timely update of available, renewed, or sublet units'
        }, {
            title: 'Teaching Assistant',
            company: 'Boston University',
            date: 'Sep. 2022 - Dec. 2022',
            description: '• Reviewed and graded code in submitted applications, providing students with constructive feedback, which improved their coding skills and understanding of course material' + 
                         '\n• Collaborated with the professor to discuss student progress and address any concerns or questions about individual students’ performance, ensuring tailored support for each student' + 
                         '\n• Managed the course Piazza (learning management system) by posting updates and answering student questions, facilitating effective communication and enhancing the overall learning experience'
        }, {
            title: 'Internal Sales Assistant',
            company: 'The Agency Texas',
            date: 'May. 2019 - Aug. 2019',
            description: '• Served as the first point of contact for customers inquiring into real estate sales in major markets including San Antonio, Austin, and Houston, handling over 50 inquiries per week' + 
                         '\n• Ensured accuracy in contact information and real estate budget for every inquiry by administering metadata, resulting in improved data reliability' + 
                         '\n• Enhanced customer efficiency by recommending alternative listings within customer parameters (location, interest rates, budget), which improved customer satisfaction ratings by 15%'
        }
    ],
    // education: [
    //     {
    //         school: 'Boston University',
    //         degree: 'Master of Science in Computer Science',
    //         date: '2021 - 2023'
    //     }, {
    //         school: 'Boston University',
    //         degree: 'Bachelor of Science in Linguistics and Computer Science',
    //         date: '2017 - 2021'
    //     }
    // ]
}