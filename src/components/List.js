import { Component } from 'react';
import Card from './Card';
import '../style/List.scss';

class List extends Component {
    render() {
        const { todos, title, onclick } = this.props;

        return (
            <div className='list'>
                <h1>{title}</h1>
                {todos.map(todo =>
                (
                    <Card key={todo.id} onclick={onclick} {...todo} />
                )
                )}
            </div>
        );
    }
}

export default List;