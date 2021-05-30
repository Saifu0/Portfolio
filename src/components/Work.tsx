import React from 'react';
import './Work';
import { Timeline } from 'antd';

function Work() {
    return (
        <div>
            <h3 className="title" style={{marginTop : 30, color : "black"}}>Work Experience</h3>
            <Timeline style={{marginTop : 20}}>
                <Timeline.Item color="green"><b>2021-04 - Present</b> : Software Development Engineer intern at Grofers 
                    <Timeline style={{marginTop : 10}}>
                        <Timeline.Item>
                            Working on Microservice Architecture with Consumer engineering team.   
                        </Timeline.Item>  
                        <Timeline.Item>
                            Designing, implementing and testing end-to-end Software Development Kits(SDKs) for different Services and integrating them. 
                        </Timeline.Item> 
                        <Timeline.Item>
                            Utilised: Python/Flask, Docker, Kubernetes, AWS.
                        </Timeline.Item>    
                    </Timeline> 
                </Timeline.Item>

                <Timeline.Item color="green"><b>2021-01 - 2021-03</b> : Full-Stack Developer intern at Pikkal & Co 
                    <Timeline style={{marginTop : 10}}>
                        <Timeline.Item>
                            Designed and developed APIs for Podcast Analytic apps using Django and Django REST framework.
                        </Timeline.Item>
                        <Timeline.Item>
                            Increased the performance of endpoints by 30% by introducing Caching and Pagination into the project.
                        </Timeline.Item>
                        <Timeline.Item>
                            Integrated Wagtail CMS in backend to automatically render Podcast related blogs in frontend.
                        </Timeline.Item>
                    </Timeline>
                </Timeline.Item>

                <Timeline.Item color="green"><b>2020-11 - 2021-01</b> : React Developer at Mithya Labs 
                    <Timeline style={{marginTop : 10}}>
                        <Timeline.Item>
                            Improved loading time of the application by 12% by integrating Redux to the project.
                        </Timeline.Item>
                        <Timeline.Item>
                            Redesigned and implemented various components of the project using Reactjs and TypeScript.
                        </Timeline.Item>
                        <Timeline.Item>
                            Optimally handled different types of APIs and HTTP methods using Axios.
                        </Timeline.Item>
                    </Timeline>
                </Timeline.Item>
            </Timeline>
        </div>
    );
}

export default Work
