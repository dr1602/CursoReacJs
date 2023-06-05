import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="LaodingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"> Loading To Dos...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading };