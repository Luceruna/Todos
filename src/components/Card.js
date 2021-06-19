import '../style/Card.scss';

/**
 * @namespace
 * @typedef {Object} cardProps
 * @property {string} title タイトル
 * @property {string} desc 説明
 * @property {number} id タスクID
 * @property {Function} onclick クリック処理関数 
 */

/**
 * カードエレメント作成
 * @param {cardProps} props 
 * @returns カードエレメント
 */
const Card = props => {
    const { onclick, title, desc, id } = props;
    
    return (
        <div className='card' onClick={() => onclick(id)}>
            <div className='title'>{title}</div>
            <div className='desc'>{desc}</div>
        </div>
    );
};

export default Card;