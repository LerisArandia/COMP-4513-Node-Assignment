import React from 'react';
// import Favorites from './FavoriteItem.js';
import { Link } from 'react-router-dom';
import { Popover, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


class FavoriteItem extends React.Component {
    delete = () => {
        console.log('delete favItem');
        this.props.deleteFav(this.props.poster);
    }

    render() {
        const content = (
            <Button type="link" danger onClick={this.delete} icon={<DeleteOutlined />}/>
        );

        return (
            <Popover content={content} trigger="hover">
                <div>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.poster.id, favsList: this.props.favsList }
                    }}>
                        <img src={`https://image.tmdb.org/t/p/w92/${this.props.poster.poster}`} style={{ margin: '0.3em' }} />
                    </Link>
                </div>
            </Popover>
        )
    }
}

export default FavoriteItem;