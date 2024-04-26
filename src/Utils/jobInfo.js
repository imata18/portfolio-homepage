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
            icon: <GitHubIcon style={{ color: 'black' }}/>
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/ivan-mata-574608174/',
            text: 'ivan-mata-574608174',
            icon: <LinkedInIcon style={{ color: 'black' }}/>
        },
        Instagram: {
            link: 'https://www.instagram.com/piyoz18/',
            text: '@piyoz18',
            icon: <InstagramIcon style={{ color: 'black' }}/>
        }
    }
}