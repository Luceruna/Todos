import PropTypes from 'prop-types';
import List from './List';
import '../style/Board.scss'

/**
 * ボードエレメント作成
 * @param {Object} props プロパティ
 * @param {Object[]} props.cards カード情報
 * @param {func} props.onClick クリック関数
 * @returns エレメント
 */
const Board = ({ cards, onclick }) => {
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

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.string.isRequired
    })),
    onclick: PropTypes.func.isRequired
};


export default Board;