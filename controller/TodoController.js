class TodoController {
    constructor($container) { 
        this._todosListView = new TodoListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.remuveTodo(id),
        });

        this._todosFormView = new TodoFormView({
            onAddTitle: () => this.addTitle(title),
        });

        $container.append(this._todosFormView.$el);       
        $container.append(this._todosListView.$el);

        this._todosList = new TodoCollection();
        this._todosList
            .fetchList()
            .then(() => this._todosListView.renderList(this._todosList.list));
    }

    onAddTitle(title) {
        this._todosList.addTitle(title);
        this._todosListView.renderList(this._todosList.list);
    }

    toggleTodo(id) {
        this._todosList.toggleTodo(id);
        this._todosListView.renderList(this._todosList.list);
    }

    remuveTodo(id) {
        this._todosList.remuveTodo(id);
        this._todosListView.renderList(this._todosList.list);
    }
}