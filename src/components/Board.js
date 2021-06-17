import { Component } from 'react';
import List from './List';
import '../style/Board.scss'

class Board extends Component {
    render() {
        const { cards, onclick } = this.props;
        return (
            <div className='board'>
                <List
                    id='todo'
                    title='To Do'
                    todos={cards.filter(c => c.status === 'todo')}
                    onclick={onclick}
                />
                <List
                    id='prog'
                    title='In-Progress'
                    todos={cards.filter(c => c.status === 'prog')}
                    onclick={onclick}
                />
                <List
                    id='done'
                    title='Done'
                    todos={cards.filter(c => c.status === 'done')}
                    onclick={onclick}
                />
            </div>
        )
    }
}

export default Board;