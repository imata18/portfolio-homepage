import Website_screenshot from '../Assets/Images/Website_screenshot.png';
import GithubIcon from '@mui/icons-material/GitHub';

export default{
    projects: [
        {
            tag: 'React',
            name: 'Portfolio Website',
            image: Website_screenshot,
            description: 'My portfolio website',
            caption: 'My porfolio website',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/portfolio-webpage'
                }
            ] 
        }
    ]
}