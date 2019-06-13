import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {fetchTasks} from '../redux/actions';

function TodoList(props) {
    useEffect(() => {
        props.fetchTasks();
    }, []);

    return (
        <div>
            {
                props.isLoading ? <h1>Loading</h1> : (
                    <ul>
                        {
                            props.tasks.map(
                                (singleTask) => <li key={singleTask.id}>{singleTask.title}</li> 
                            )
                        }
                    </ul>
                )
            }
        </div>
        
    )
}

export default connect(
    (state) => ({tasks: state.todo.get('tasks'), isLoading: state.todo.get('isLoading')}),
    {
        fetchTasks
    }
)(TodoList);



