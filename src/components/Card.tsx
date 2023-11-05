import '../style/Card.scss';

/** カードエレメント作成 */
const Card: React.FC<Card> = ({ onclick, title, desc, id }) => {
    return (
        <div className='card' onClick={() => onclick(id)}>
            <div className='title'>{title}</div>
            <div className='desc'>{desc}</div>
        </div>
    );
};

export default Card;