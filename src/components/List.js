import PropTypes from 'prop-types';
import Card from './Card';
import '../style/List.scss';

/**
 * リストエレメント作成
 * @param {Object} props プロパティ
 * @returns リストエレメント
 */
const List = ({ todos, title, onclick }) => {
    return (
        <div className='list'>
            <h1>{title}</h1>
            {todos.map(todo => <Card key={todo.id} onclick={onclick} {...todo} />)}
        </div>
    );
};

List.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.string.isRequired
    })),
    onclick: PropTypes.func.isRequired
};

export default List;