import React, { useState } from 'react';
import './List.css'
const List = () => {
    const [taskList, setTaskList] = useState([]);
    const [data, setData] = useState({
        task: "",
        date: "",
        time: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList((prevTaskList) => [...prevTaskList, data]);
        setData({
            task: "",
            date: "",
            time: ""
        });
    };

    const handleDelete = (index) => {
        alert("are you sure you want to delete ?")
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    return (
        <div className='main'>
            <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
            <label className='label'>
                Add your Task Here
                <input type="text" onChange={handleChange} name="task" value={data.task} />
            </label>
            <br />
            <label className='label'>
                Dead Line
                <input type="date" onChange={handleChange} name="date" value={data.date} />
            </label>
            <br />
            <label className='label'    >
                Time
                <input type="time" onChange={handleChange} name="time" value={data.time} />
            </label >
            <br />
            <button type="submit">Submit</button>
            
            <div>
                <h3>Task List</h3>
                <ul>
                    {taskList.length > 0 ? (
                        taskList.map((list, index) => (
                            <li key={index}>
                                Task: {list.task}, Date: {list.date}, Time: {list.time}
                                <button type="button" onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))
                    ) : (
                        <li>Add tasks</li>
                    )}
                </ul>
            </div>
        </form>
        </div>
    );
};

export default List;
