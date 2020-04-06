import React from "react";
import '../css/MovieThumb.css';
import { Link } from 'react-router-dom';
import { Card, Button, Space } from 'antd';
import { HeartTwoTone, EyeOutlined } from '@ant-design/icons';


class FilteredMovieThumb extends React.Component {

    add = () => {
        this.props.addFav(this.props.movie.poster);
    }

    render() {
        const imgURL = `https://image.tmdb.org/t/p/w92/${this.props.movie.poster}`;
        return (
            <Card
                hoverable
                id="cardList"
                style={{ width: 200 }}
                cover={
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}><img src={imgURL} /></Link>
                }>
                <Link to={{
                    pathname: '/moviedetails',
                    state: { id: this.props.id, favsList: this.props.favsList }
                }}>
                    <h3>{this.props.movie.title}</h3>
                </Link>
                <p>{this.props.year}</p>
                <p>{this.props.rating}</p>
                <Space size={30}>
                    <Button onClick={this.add} shape="circle" size="large" icon={<HeartTwoTone twoToneColor="#eb2f96" />}/>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}>
                        <Button shape="circle" size="large" icon={<EyeOutlined />}/>
                    </Link>
                </Space>
            </Card>
        );
    }

}

export default FilteredMovieThumb;