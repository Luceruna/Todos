import List from './List.tsx';
import '../style/Board.scss'

/** ボードエレメント作成 */
const Board: React.FC<Board> = ({ cards, onclick }) => {
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
    );
};

export default Board;