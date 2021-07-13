import React from 'react'; 
import Essay from './Essay';

const Homework = () => {
    return (
        <div>Homework
            <Essay
            number={ 1 }
            question='What is the difference between Git, Github and Heroku?'
            >
            My Answer 1
            </Essay>
            
            <Essay
            number={ 2 }
            question='Explain the difference between HTML, CSS and JS.'
            >
            My Answer 1
            </Essay>
        </div>
    );
}

export default Homework; 
