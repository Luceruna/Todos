import { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import '../style/Form.scss';

/**
 * アラートエレメント作成
 * @param {Object} props 
 * @returns アラートエレメント
 */
const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

/**
 * @namespace
 * @typedef {Object} formProps
 * @property {Function} add 追加関数
 */

/**
 * フォームエレメント作成
 * @param {formProps} props 
 * @returns エレメント
 */
const Form = props => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    /**
     * タイトル入力処理
     * @param {Event} e イベント情報
     */
    const handleTitleInputChange = e => setTitle(e.target.value);

    /**
     * 詳細入力処理
     * @param {Event} e イベント情報
     */
    const handleDescInputChange = e => setDesc(e.target.value);

    /**
     * アラート閉処理
     * @param {Event} event イベント情報
     */
    const handleClose = e => setOpen(false);

    /** フォームクリア処理 */
    const clearInputField = () => {
        setTitle('');
        setDesc('');
    };

    /**
     * タスク追加処理
     * @param {Event} e イベント情報
     */
    const callAddTodoList = e => {
        e.preventDefault();
        if (title.trim()) {
            props.add(title, desc);
            clearInputField();
        } else {
            setMessage("タイトルを入力してください");
            setOpen(true);
        }
    };

    return (
        <div>
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
            <Snackbar
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                }
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
};

export default Form;