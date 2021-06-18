import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import '../style/Form.scss';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const Form = props => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleTitleInputChange = e => setTitle(e.target.value);
    const handleDescInputChange = e => setDesc(e.target.value);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setOpen(false);
    }

    const clearInputField = () => {
        setTitle("");
        setDesc("");
    };

    const callAddTodoList = e => {
        e.preventDefault();
        if (title.trim()) {
            props.add(title, desc);
        } else {
            setMessage("タイトルを入力してください");
            setOpen(true);
        }
        clearInputField();
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
}

export default Form;