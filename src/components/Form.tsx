import { useState } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import '../style/Form.scss';

/**
 * アラートエレメント作成
 * @param {Object} props 
 * @returns アラートエレメント
 */
const Alert = (props: any) => <MuiAlert elevation={6} variant="filled" {...props} />;

/**
 * フォームエレメント作成
 * @param {Object} props 
 * @param {func} props.add add関数
 * @returns エレメント
 */
const Form: React.FC<Form> = props => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    /**
     * タイトル入力処理
     * @param {Event} e イベント情報
     */
    const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    /**
     * 詳細入力処理
     * @param {Event} e イベント情報
     */
    const handleDescInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value);

    /**
     * アラート閉処理
     * @param {Event} event イベント情報
     */
    const handleClose = (_: any) => setOpen(false);

    /** フォームクリア処理 */
    const clearInputField = () => {
        setTitle('');
        setDesc('');
    };

    /**
     * タスク追加処理
     * @param {Event} e イベント情報
     */
    const callAddTodoList = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        <>
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
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <div>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </div>
            </Snackbar>
        </>
    )
};

export default Form;