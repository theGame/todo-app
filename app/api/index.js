import fetch from 'isomorphic-fetch';

const TODOS_URL = 'http://localhost:3001/todos';
const SIGNIN = 'http://localhost:3001/auth/signin';
// const SIGNOUT = 'http://localhost:3001/auth/signup';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'credentials': 'same-origin'
};

export async function getTodos() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(TODOS_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function postTodo(todo) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(todo)
        };

        const response = await fetch(TODOS_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function putTodo(id, update) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify(update)
        };

        const response = await fetch(`${ TODOS_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function deleteTodo(id) {
    try {
        const options = {
            mode: 'cors',
            method: 'DELETE',
            headers: jsonHeaders
        };

        const response = await fetch(`${ TODOS_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function loginUser(email, password) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({
                email,
                password
            })
        };

        const response = await fetch(SIGNIN, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}
