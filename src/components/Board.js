import List from './List';
import '../style/Board.scss'

/**
 * @namespace
 * @typedef {Object} boardProps
 * @property {Array} cards タスク一覧
 * @property {Function} onclick クリック処理関数
 */

/**
 * ボードエレメント作成
 * @param {boardProps} props プロパティ
 * @returns エレメント
 */
const Board = props => {
    const { cards, onclick } = props;

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