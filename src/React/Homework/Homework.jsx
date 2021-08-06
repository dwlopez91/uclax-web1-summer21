import React from 'react'; 
import Essay from './Essay';
import SunAndMoon from '../SunAndMoon/SunAndMoon';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>
            { media.mdUp && <SunAndMoon /> }
            <h2>HOMEWORK</h2>
            <Essay
            number={ 1 }
            question='What is the difference between Git, Github and Heroku?'
            >
            <p>Git is a version control system that is local, meaning only on the computer you're using.</p>
            <p>Github is a cloud based platform for multiple people to push code and collaborate on a project.</p>
            <p>Heroku is a cloud based platform for collaboration but also has a server to deploy websites.</p>
            </Essay>
            
            <Essay
            number={ 2 }
            question='Explain the difference between HTML, CSS and JS.'
            >
            <p>HTML is like the skeleton of a webpage. </p>
            <p>CSS is the style and features of the website.</p> 
            <p>JS is concerned with the functions of the webpage/site.</p>

            </Essay>

            <Essay
            number={ 3 }
            question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
            <p>Single page apps are loaded one time through the browser.</p>
            <p>They differ from traditional mp websites in that they make changes through APIs and JavaScript and only what is needed. </p>
            

            </Essay>
            <Essay
            number={ 4 }
            question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
            <p>A web designer works with some code but is mostly concerned with visual aspects such as typography, color coordination, and UX/UI.</p>
            <p>A front end developer works with HTML, CSS and JS to build the public facing side of websites and applications. </p>
            <p>Back end developers handle databases, server and networking parts of websites.</p>

            </Essay>
            <Essay
            number={ 5 }
            question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
            >
                <li>Site Relative: path is devised from the root of the site instead of document. </li>
                <li>Document Relative:  paths locating specific files from current working directory.</li>
                <li>Absolute Path: includes the whole address including site domain and complete file path. Can be accessed anywhere. Fully resolved URL. </li>

            </Essay>
            <Essay
            number={ 6 }
            question='What is the difference between jpg, gif, png and SVG images?'
            >
                <li>GIF: Graphic Interchange format; bitmap - for things like animation and logos.</li>
                <li>SVG: scalable vector graphics; Logos, line art, icons - vector not bitmap so can scaled with no loss of quality.</li>
                <li>PNG: portable graphics group; True alpha transparency; supports millions of colors. Lossless compression.</li>
                <li>JPG: joint photographic exports group, bitmap, propietary lossy compression, millions of colors allowed.</li>

            </Essay>
            <Essay
            number={ 7 }
            question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                <li>Project Manager: in charge of planning, resources procurement, and project execution. Does not usually do front-line work.</li>
                <li>Business Analyst: in IT, identifies tech solutions that increase production and are cost effective. </li>
                <li>Scrum Master: in charge of keeping a team on task and aligned with Agile values/principles during a sprint. </li>
                <li>UX Designer: uses market research, data from users, and industry knowledge to design products, websites, etc. </li>
                <li>Web Developer: Designs architecture of websites, including functions, features and security.</li>
                <li>Quality Assurance Tester: examine products to determine whether or not they function correctly.</li>
                <li>DevOps: combination of processes/practices from software development and IT operation in cycles</li>

            </Essay>
        </div>
    );
}

export default Homework; 
