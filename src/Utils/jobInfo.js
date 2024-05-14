import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default {
    name: 'Ivan Mata',
    title: 'Recent MS Graduate',

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
        "As an administrative assistant at Real Estate Management & Investment LLC (REMI), I leverage my computer science skills and knowledge to improve the efficiency and accuracy of the company's data and document management. I have created Google Scripts to automate the creation of tenant and lease documents, and utilized Google Sheet equations to facilitate the updating of available, renewed, or sublet units. I also assist in inspecting apartments and creating reports for any maintenance jobs, using my attention to detail and organizational skills. \n\nI have a master's degree in computer science from Boston University, where I also completed my bachelor's degree in linguistics and computer science. During my studies, I gained six years of experience in Java, Kotlin, Ruby on Rails, SQL, and Python, and developed several Android applications that are showcased on my GitHub page. I also worked as a teaching assistant, where I reviewed and graded code, provided feedback, and managed the course learning system. I am passionate about coding and learning new technologies, and I am always eager to apply my skills to real-world problems and challenges."
    ,
    experiences: [
        {
            title: 'Administrative Assistant',
            company: 'Real Estate Management & Investment LLC',
            date: 'Oct. 2023 - Present',
            description: '• Input and update tenant information in physical and digital filing systems \n• Create Google Scripts to automatize the creation of tenant and lease documents \n• Assist in inspecting apartments and creating reports for any maintenance jobs \n• Utilize Google Sheet equations to facilitate the updating of available, renewed, or sublet units'
        }, {
            title: 'Teaching Assistant',
            company: 'Boston University',
            date: 'Oct. 2023 - Present',
            description: '• Input and update tenant information in physical and digital filing systems \n• Create Google Scripts to automatize the creation of tenant and lease documents \n• Assist in inspecting apartments and creating reports for any maintenance jobs \n• Utilize Google Sheet equations to facilitate the updating of available, renewed, or sublet units'
        }, {
            title: 'Real Estate Management & Investment LLC',
            date: 'Oct. 2023 - Present',
            description: '• Input and update tenant information in physical and digital filing systems \n• Create Google Scripts to automatize the creation of tenant and lease documents \n• Assist in inspecting apartments and creating reports for any maintenance jobs \n• Utilize Google Sheet equations to facilitate the updating of available, renewed, or sublet units'
        }
    ]
}