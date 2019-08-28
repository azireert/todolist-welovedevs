import {todosRef} from '../firebase/firebase'
import { FETCH_TODOS} from "./types";

export const addToDo = newToDo => async dispatch => {
    todosRef.push().then((snap) => {
        const newWorker = {
            id: snap.key,
            firstname: newToDo.firstname,
            lastname: newToDo.lastname,
            job: newToDo.job,
            position: newToDo.position
        };
        todosRef.child(newWorker.id).set(newWorker);
    })
};
export const completeToDo = completeToDo => async dispatch => {
    todosRef.child(completeToDo).remove();
};
export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};
