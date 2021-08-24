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
            <Essay
            number={ 8 }
            question='What is considered the right size for an image or video asset?'
            >
            <li>It depends on the container size and the use case for the image or video. You want to choose lower file sizes (quality).</li>
            <li>Default video to 16x9</li>
            <li>Hero images should be 1500x2500px</li>
            <li>Video length should be 30-40 seconds</li>
            <li>25-30MB max</li>
            </Essay>
        
            <Essay
            number={ 9 }
            question='What does it mean for a company to be Agile? What are the pros and cons of being agile?'
            >
            <li>Agile: a method for software development where a team works in small increments continuously, rather than publishing one final product.</li>
            <li>Agile brings everyone to the process so it moves much faster and with less stalls. It also allows for immediate feedback to be implemented.</li>
            <li>The drawbacks to Agile would be end user experience is constantly changing - it takes time for people to adapt. Documentation is also commonly lost.</li>
            </Essay>
            
            <Essay
            number={ 10 }
            question='What are testing environments? What is the difference between Local, Dev, QA and Production?'            >
            <li>Testing environments are servers that run specific tests to make sure code is working as intended. There will often be multiple environemnts to test different functions.</li>
            <li>Local: one developer is working on the code and testing.</li>
            <li>Dev: Multiple developers are working together for writing code and may be testing.</li>
            <li>QA: different tests are run to try and "break" the code in a testing environment.</li>
            <li>Production: live deployment. Tests and bug fixes are run while the app is in use.</li>
            </Essay>
            
            <Essay
            number={ 11 }
            question='When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'            
            >
            <p>Web images are considered part of the HTML when they serve a purpose - this would be important for accessibility screen readers. 
            An image is considered part of the CSS when it is for decorative purposes only, e.g. background images. These would not be read by screen readers. 
            </p>
            </Essay>
            <Essay
            number={ 12 }
            question="What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)?"            
            >
                <li>ID's are unique, meaning an ID can only have one value. Referencing an ID in CSS or JS only affects the 1 value.</li>
                <li>Classes can have multiple values, or more than 1 item can belong to the same class. Referencing a class in CSS or JS affects all the elements that have that class.</li>
                <li>Tags go around HTML elements such as {"<p></p>"}</li>
            </Essay>
            
        </div>
    );
}

export default Homework; 
