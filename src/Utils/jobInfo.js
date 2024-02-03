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
        github: {
            link: 'https://github.com/imata18',
            text: 'My Github',
            icon: <GitHubIcon/>
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/ivan-mata-574608174/',
            text: 'My Linkedin',
            icon: <LinkedInIcon/>
        },
        instagram: {
            link: 'https://www.instagram.com/piyoz18/',
            text: 'My Instagram',
            icon: <InstagramIcon/>
        }
    }
}