class TodoListView {   
    static DONE_CLASS = 'done';
    static DELETE_CLASS = '.delete-btn'
    static SELECT_CLASS = '.list_elements';
    static LIST_HTML = `<ol class="list_block"></ol>`;
    static LIST_ITEM_TEMPLATE = `<li class="list_elements {{doneClass}}" data-id='{{id}}'>
        {{title}}
        <span type="button" class="delete-btn">&#10006;</span>
    </li>`;

    static createItemElement(todo) {
        return $(
            TodoListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
                .replace('{{title}}', todo.title)
                .replace(
                    '{{doneClass}}',
                    todo.isDone ? TodoListView.DONE_CLASS : '',
                ),
        );
    }

    constructor(config = {}) {
        this.$el = $(TodoListView.LIST_HTML).on(
            'click',
            TodoListView.SELECT_CLASS,
            (e) => config.onToggle && config.onToggle($(e.target).data('id')),
        ).on('click',
            TodoListView.DELETE_CLASS,
            (e) => {
                e.stopPropagation();
                config.onDelete &&
                config.onDelete(
                $(e.target)
                    .closest(TodoListView.SELECT_CLASS)
                    .data('id'))
            }
        )
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodoListView.createItemElement));
    }
}