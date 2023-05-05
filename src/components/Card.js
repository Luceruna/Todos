import PropTypes from 'prop-types';
import '../style/Card.scss';

/**
 * カードエレメント作成
 * @param {Object} props プロパティ
 * @param {func} props.onclick クリック関数
 * @param {string} props.title タイトル
 * @param {string} props.desc 説明
 * @param {number} props.id カードID
 * @returns カードエレメント
 */
const Card = ({ onclick, title, desc, id }) => {
    return (
        <div className='card' onClick={() => onclick(id)}>
            <div className='title'>{title}</div>
            <div className='desc'>{desc}</div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    id: PropTypes.number.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Card;