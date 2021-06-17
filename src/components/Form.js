import { useState } from 'react';
import '../style/Form.scss';

const Form = props => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleTitleInputChange = e => setTitle(e.target.value);
    const handleDescInputChange = e => setDesc(e.target.value);

    const clearInputField = () => {
        setTitle("");
        setDesc("");
    };

    const callAddTodoList = e => {
        e.preventDefault();
        if (title.trim()) {
            props.add(title, desc);
        }
        clearInputField();
    };

    return (
        <form>
            <div className='title'>
                <input
                    className='ef'
                    type='text'
                    onChange={handleTitleInputChange}
                    value={title}
                    placeholder=''
                />
                <label>タイトル</label>
                <span className='focus_line'></span>
            </div>
            <div className='desc'>
                <input
                    className='ef'
                    type='text'
                    onChange={handleDescInputChange}
                    value={desc}
                    placeholder='' />
                <label>詳細を入力</label>
                <span className='focus_line'></span>
            </div>
            <div className='button'>
                <button className='btn btn-flat' type='submit' onClick={callAddTodoList}><span>ADD</span></button>
            </div>
        </form>
    )
}

export default Form;