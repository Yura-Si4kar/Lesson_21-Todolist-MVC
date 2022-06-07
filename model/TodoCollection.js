const TODO_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

class TodoCollection{
    constructor() {
        this.list = [];
    }

    fetchList() {
        return fetch(TODO_URL)
            .then((res) => res.json())
            .then((data) => (this.list = data));        
    }

    toggleTodo(todoID) {
        const todoItem = this.list.find(({id}) => id == todoID);

        if (!todoItem) {
            return console.error('Id not found', todoID);
        }

        todoItem.isDone = !todoItem.isDone;

        fetch(TODO_URL + todoID, {
            method: 'PUT',
            body: JSON.stringify(todoItem),
            header: {
                'Content-Type': 'application/json'
            },
        });
    }

    remuveTodo(todoID) {
        this.list = this.list.filter(({ id }) => id != todoID);
        
        fetch(TODO_URL + todoID, {
            method: 'DELETE',
        });
    }

    addTitle(value) {
        this.list.push(value);

        fetch(TODO_URL + todoID, {
        method: 'POST',
        body: JSON.stringify(this.list),
        header: {
            'Content-Type': 'application/json'
        },
    });
    }
}