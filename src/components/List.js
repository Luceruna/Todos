import { Component } from 'react';
import Card from './Card';
import '../style/List.scss';

class List extends Component {
    render() {
        const { todos, title, onclick } = this.props;
        const cards = todos.map(todo => {
            return (
                <Card key={todo.id} {...todo} onclick={onclick} />
            )
        });

        return (
            <div className='list'>
                <h1>{title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;