import { React, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoForm = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            toast.warn('Cannot remain empty!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
            toast.success('Todo added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        };
    };

    return (
        <div className='container py-3'>
            <ToastContainer />
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="Title" aria-describedby="Title" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
