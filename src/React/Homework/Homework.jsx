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
                <li>Site Relative: uses the current file/folder name only. Can be accesses while on the website but not outside of it. </li>
                <li>Document Relative:  only includes the address of the current file; you wouldn't be able to access outside its specific folder.</li>
                <li>Absolute Path: includes the whole address including site domain and complete file path. Can be accessed anywhere.</li>

            </Essay>
        </div>
    );
}

export default Homework; 
