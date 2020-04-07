import React from 'react';
import { Typography, Space } from 'antd';

class About extends React.Component {
    render() {
        const { Title } = Typography;
        return (
            <div>
                <Space direction="vertical">
                    <div>
                        <Title level={4}>Who are We?</Title>
                        <div>Leris Arandia, Jamie Wong, & Natnael Beshawered </div>
                    </div>
                    <div>
                        <Title level={4}>What is this?</Title>
                        <div>A COMP 4513 Assignment using React. It's essentially a movie database website. Using this, one can browse movies, filter through them, and find out more information about each one. Information for cast and crew can be found as well. Enjoy your stay.</div>
                    </div>
                    <div>
                        <Title level={4}>Github?</Title>
                        <div> Yes. <a href="https://github.com/nbesh761/COMP-4513-React-Assignment">https://github.com/nbesh761/COMP-4513-React-Assignment</a> (It's private ..)</div>
                    </div>
                    <div>
                        <Title level={4}>What was used?</Title>
                        <div>
                            VS Code, Brackets, GitHub
                    </div>
                    </div>
                </Space>
            </div>
        )
    }
}
export default About;