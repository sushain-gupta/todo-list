import {React, useState} from 'react'

export const TodoForm = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Cannot be blank")
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        };
    };

    return (
        <div className='container py-3'>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="Title" aria-describedby="Title" />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    </div>
    )
}
