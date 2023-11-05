
import Card from './Card.tsx';
import '../style/List.scss';

/** リストエレメント作成 */
const List: React.FC<List> = ({ todos, title, onclick }) => {
    return (
        <div className='list'>
            <h1>{title}</h1>
            {todos.map(todo => <Card key={todo.id} {...todo} onclick={onclick} />)}
        </div>
    );
};

export default List;