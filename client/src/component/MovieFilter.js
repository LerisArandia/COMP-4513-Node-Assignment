import React from 'react';
import '../css/MovieFilter.css';
import { Drawer, Button, Form, Space, Radio, Input, Row, Col, Typography } from 'antd';

class MovieFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { yearRadio: {}, ratingRadio: {} };

        this.title = React.createRef();

        this.yearBeforeRadio = React.createRef();
        this.yearBefore = React.createRef();
        this.yearAfterRadio = React.createRef();
        this.yearAfter = React.createRef();
        this.yearBetweenRadio = React.createRef();
        this.yearMin = React.createRef();
        this.yearMax = React.createRef();

        this.ratingBelowRadio = React.createRef();
        this.ratingBelow = React.createRef();
        this.ratingAboveRadio = React.createRef();
        this.ratingAbove = React.createRef();
        this.ratingBetweenRadio = React.createRef();
        this.ratingMin = React.createRef();
        this.ratingMax = React.createRef();
    }

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    filterRating = () => { this.props.filterRating(this.props.movieList); }
    filterYear = () => { this.props.filterYear(this.props.movieList); }
    filterTitle = () => { this.props.filterTitle(this.props.movieList); }

    handleSubmit = (e) => {
        e.preventDefault();

        let titleValue = "";
        let minYear = "";
        let maxYear = "";
        let minRating = "";
        let maxRating = "";

        if (this.title.current.value !== "") {
            titleValue = `${this.title.current.value}`;
            console.log("has title");
        }

        if (this.state.yearRadio === "yearBefore") {
            maxYear = this.yearBefore.current.value;
        }
        else if (this.state.yearRadio === "yearAfter") {
            minYear = this.yearAfter.current.value;
        }
        else if (this.state.yearRadio === "yearBetween") {
            minYear = this.yearMin.current.value;
            maxYear = this.yearMax.current.value;
        }

        if (this.state.ratingRadio === "ratingBelow") {
            maxRating = this.ratingBelow.current.value;
        }
        else if (this.state.ratingRadio === "ratingAbove") {
            minRating = this.ratingAbove.current.value;
        }
        else if (this.state.ratingRadio === "ratingBetween") {
            minRating = this.ratingMin.current.value;
            maxRating = this.ratingMax.current.value;
        }


        this.props.filterMovie(titleValue, minYear, maxYear, minRating, maxRating);
    }

    render() {
        const { Title } = Typography;
        return (
            <div>
                <Button onClick={this.showDrawer} id="filterBtn">Filters</Button>
                <Drawer
                    title="Movie Filter"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width="medium"
                    closable
                >
                    <Space>
                        <Button onClick={this.filterTitle}>By Title</Button>
                        <Button onClick={this.filterYear}>By Year</Button>
                        <Button onClick={this.filterRating}>By Rating</Button>
                    </Space>

                    <Form onSubmit={this.handleSubmit} id="filterForm">
                        <Form.Item>
                            <Title level={4}>Title</Title>
                            <Input name="title" ref={this.title} />
                        </Form.Item>

                        <Form.Item className="filterYear">
                            <Title level={4}>Year</Title>
                            <div>
                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="yearBefore" checked={this.state.yearRadio === "yearBefore"} onChange={this.consoleYear} ref={this.yearBeforeRadio}>Before</Radio></Col>
                                        <Col span={8}><Input name="beforeNum" ref={this.yearBefore} /></Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="yearAfter" checked={this.state.yearRadio === "yearAfter"} onChange={this.consoleYear} ref={this.yearAfterRadio}>After</Radio></Col>
                                        <Col span={8}><Input name="afterNum" ref={this.yearAfter} /></Col>
                                    </Row>
                                </div>

                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="yearBetween" checked={this.state.yearRadio === "yearBetween"} onChange={this.consoleYear} ref={this.yearBetweenRadio}>Between</Radio></Col>
                                        <Col span={8}><Input name="beforeNum" ref={this.yearMin} /></Col>
                                        <Col span={8}><Input name="beforeNum" ref={this.yearMax} /></Col>
                                    </Row>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item className="filterRating">

                            <Title level={4}>Rating</Title>
                            <div>
                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="ratingBelow" checked={this.state.ratingRadio === "ratingBelow"} onChange={this.consoleRating} ref={this.ratingBelowRadio}>Below</Radio></Col>
                                        <Col span={8}><Input name="ratingBelow" ref={this.ratingBelow} /></Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="ratingAbove" checked={this.state.ratingRadio === "ratingAbove"} onChange={this.consoleRating} ref={this.ratingAboveRadio}>Above</Radio></Col>
                                        <Col span={8}><Input name="ratingAbove" ref={this.ratingAbove} /></Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row gutter={[8, 8]}>
                                        <Col span={8}><Radio name="ratingBetween" checked={this.state.ratingRadio === "ratingBetween"} onChange={this.consoleRating} ref={this.ratingBetweenRadio}>Between</Radio></Col>
                                        <Col span={8}><Input name="minRating" ref={this.ratingMin} /></Col>
                                        <Col span={8}><Input name="maxRating" ref={this.ratingMax} /></Col>
                                    </Row>
                                </div>
                            </div>
                        </Form.Item>

                        <Space>
                            <Button type="primary">Filter</Button>
                            <Button type="primary" onClick={this.props.clearFilter}>Clear</Button>
                        </Space>
                    </Form>

                </Drawer>
            </div>
        );
    }

    consoleYear = (e) => { this.setState({ yearRadio: e.target.name }); }

    consoleRating = (e) => { this.setState({ ratingRadio: e.target.name }); }

}

export default MovieFilter;