import React from 'react';
import { Card } from 'antd';

function Projects() {
    return (
        <div>
            <h3 className="title">Projects</h3>
            <Card size="small" title="Microservices based E-Commerce application">
                <i>June, 2021 - Present</i> : <b><a href="https://github.com/Saifu0/ecommerce-microservices" target="blank">Github</a></b>
                <ul>
                    <li>Work in progress</li>
                </ul>
            </Card>

            <hr/>

            <Card size="small" title="Trackify - A job application manager">
                <i>Jan, 2021 - March, 2021</i> : <b><a href="https://github.com/Saifu0/trackify-backend" target="blank">Github</a></b> | <b><a href="https://trackify-job.herokuapp.com" target="blank">Live</a></b>
                <ul>
                    <li>Developed a Job application tracker using TypeScript and Django that allows user to manage their job applications
                    and track their status.</li>
                    <li>Implemented Token authentication for secure User and API authentication and authorization.</li>
                    <li>Designed RESTful backend server enabling job applications to be stored persistently in an online database.</li>
                    <li>Technologies used: TypeScript, React.js, Django, Django REST framework, Ant design, Material UI.</li>
                </ul>
            </Card>

            <hr/>

            <Card size="small" title="VisuaML - A machine learning algorithm visualizer">
                <i>Aug 2020 - Oct 2020</i> : <b><a href="https://github.com/Saifu0/ml-visualizer" target="blank">Github</a></b>
                <ul>
                    <li>Created a Machine Learning Algorithm visualizer that works in real-time on various datasets fed by users and
                    shows relevant information such as prediction line, accuracy, etc on the frontend.</li>
                    <li>Designed and implemented various Machine Learning algorithms in the backend to support visualization using
                    Django and Sklearn.</li>
                    <li>Technologies used: React.js, p5.js, Django, Scikit, Pandas, Numpy</li>
                </ul>
            </Card>
        </div>
    )
}

export default Projects
