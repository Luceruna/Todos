import { Component } from 'react';
import '../style/Card.scss';

class Card extends Component {
    render() {
        const { onclick, title, desc, id } = this.props;
        return (
            <div className='card' onClick={() => onclick(id)}>
                <div className='title'>{title}</div>
                <div className='desc'>{desc}</div>
            </div>
        );
    }
}

export default Card;