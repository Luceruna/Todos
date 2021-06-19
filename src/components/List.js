import Card from './Card';
import '../style/List.scss';

/**
 * @namespace
 * @typedef {Object} listProps
 * @property {Array} todos タスク一覧
 * @property {string} title タイトル
 * @property {Function} onclick クリック処理
 * @property {string} id ID
 */

/**
 * リストエレメント作成
 * @param {listProps} props プロパティ
 * @returns リストエレメント
 */
const List = props => {
    const { todos, title, onclick } = props;

    return (
        <div className='list'>
            <h1>{title}</h1>
            {todos.map(todo => <Card key={todo.id} onclick={onclick} {...todo} />)}
        </div>
    );
};

export default List;