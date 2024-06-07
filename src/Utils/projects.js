import Website_screenshot from '../Assets/Images/Website_screenshot.png';
import Gender_bias_screenshot from '../Assets/Images/Gender_bias_screenshot.png';
import Meet4Sho_screenshot from '../Assets/Images/Meet4Sho_screenshot.png';
import Java_template_image from '../Assets/Images/Java_template_image.png';
import TransUnet_screenshot from '../Assets/Images/TransUnet_screenshot.png';
import RoadtripPlanner_screenshot from '../Assets/Images/RoadtripPlanner_screenshot.png';
import GithubIcon from '@mui/icons-material/GitHub';

export default{
    projects: [
        {
            tags: ['React', 'JavaScript', 'CSS'],
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
        }, {
            tags: ['Python', 'AI'],
            name: 'Gender Bias in LLMs',
            image: Gender_bias_screenshot,
            description: 'In this paper, my team and I extended the work \
            of Nozza et al. by building templates that condition not on the gender, but on the hurtful phrase, \
            and analyzing whether the completion of the language model is gendered. Moreover, while \
            HONEST only analyzes hurtful completions, we also incorporated positive templates into our \
            measurement. We defined our own bias metric, using a dataset of 2000 templates, which \
            incorporates sentiment as well as the probability of each gender term to enhance the metric, \
            which was demonstrated to be useful in previous bias analyses. Using our metric, we \
            analyzed 2 popular large language models, BERT and BART, for gender biases.',
            caption: 'Analysis of 2 popular LLMs, BERT and BART, for gender biases',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/gender-bias-in-LLM'
                }
            ]
        }, {
            tags: ['Android', 'Java', 'Firebase'],
            name: 'Meet4Sho',
            image: Meet4Sho_screenshot,
            description: 'Collaborated to create an Android app that would help people search for events, movies, etc., to chat and meet up \
            with people with similar interests. \
            As the appointed designated scrum master for the team, I scheduled days for the team to meet to make sure that the app \
            was progressing at a speed that would meet the deadline. \
            I also assisted in clearing any roadblocks that group members had (primarily frontend), communicated with companies \
            that the team had obtained API keys from, and created weekly reports that stated everything that had been \
            completed that week.',
            caption: 'An Android app that helps people search for events and meet up with people with similar interests.',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/Meet4Sho'
                }
            ]
        }, {
            tags: ['Java', 'SQL'],
            name: 'ATM/Bank Simulation',
            image: Java_template_image,
            description: 'Collaborated with a team of three students to develop a banking system for both managers and customers. \
            Created GUI page\'s that allowed for easy navigation and reusability. \
            Integrated SQLite JDBC Drive to create databases to save user\'s login credentials, account statements, and balances.',
            caption: 'A simulated ATM/Banking application made using Java',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/ATM_Banking'
                }
            ]
        }, {
            tags: ['Python', 'AI'],
            name: 'TransUnet-Segmentation',
            image: TransUnet_screenshot,
            description: 'Collaborated with another student to train a TransUnet segmentation model on a dataset of images comprised of CT scans. \
            The model would segment the health organs located near the target tumor so as to aid in the irradiation planning of lung and esophageal cancers.',
            caption: 'A TransUnet segmentation model for irradiation planning',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/TransUnet-Segmentation'
                }
            ]
        }, {
            tags: ['Python', 'HTML'],
            name: 'Roadtrip Planner',
            image: RoadtripPlanner_screenshot,
            description: 'Collaborated with 2 other students to create a web application that would allow users to plan a roadtrip. \
            The application would allow users to select their destination, departure date, and return date. \
            We utilized MapQuest API to get the directions of the roadtrip and Yelp API to get the hotel suggestions.',
            caption: 'A web application that allows users to plan a roadtrip',
            links: [
                {
                    icon: <GithubIcon />,
                    link: 'https://github.com/imata18/Roadtrip-Planner'
                }
            ]
        }
    ]
}