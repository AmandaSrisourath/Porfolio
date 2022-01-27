import React from "react";
import styled from "@emotion/styled";

function Experience() {
    return (
        <div>
            <h2>
                Experience
            </h2>

            <ExperienceContainer>
                <ExperienceBox>
                    <h3>
                        Convert a jQuery library to React
                    </h3>

                    <ul>
                        <li>Redesign an application to reduce technical debt</li>
                        <li>Analyze the performance of a web application</li>
                        <li>Deploy a front-end application</li>
                        <li>Unit testing</li>
                        <li>Technologies used : React, React Router, Redux / Toolkit, Emotion, Jest, Testing-Library</li>
                    </ul>
                </ExperienceBox>

                <ExperienceBox>
                    <h3>
                        Use an API for a bank user account with React
                    </h3>

                    <ul>
                        <li>Implement a state manager in a React application using Redux / Toolkit</li>
                        <li>Interact with an API</li>
                        <li>Authentication with an API</li>
                        <li>Technologies used : React, React Router, Redux / Toolkit, Axios</li>
                    </ul>
                </ExperienceBox>

                <ExperienceBox>
                    <h3>
                        Build an analytics dashboard with React
                    </h3>

                    <ul>
                        <li>Interact with a web service</li>
                        <li>Develop advanced graphical elements using recharts</li>
                        <li>Produce technical documentation for an application</li>
                        <li>Technologies used : React, React Router, Axios, Recharts</li>
                    </ul>
                </ExperienceBox>

                <ExperienceBox>
                    <h3>
                        Create an application with React and React Router
                    </h3>

                    <ul>
                        <li>Developing routes for a web application with React Router</li>
                        <li>Initialize a web application with a framework</li>
                        <li>Create components with React</li>
                        <li>Technologies used : React, React Router</li>
                    </ul>
                </ExperienceBox>
            </ExperienceContainer>
        </div>
    )
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ExperienceBox = styled.div`
  width: 44%;
  color: white;
  background-color: #282c34;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`

export default Experience;