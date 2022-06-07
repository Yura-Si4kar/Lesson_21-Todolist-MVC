class TodoFormView {
    static FORM_TEMPLATE = `<form class="input_block" class="form">
            <input class="input_text" type="text" name="name" placeholder="Enter the task!">
            <p class="error">Wrong! Write at least three characters!</p>
            <button class="input_btn" type="submit">Click</button>
    </form>`;
    static SUBMIT_CLASS = '.input_block';
    static ADD_BTN_CLASS = '.input_btn';

    static createItemElement(todo) {
        return $(
            TodoFormView.FORM_TEMPLATE,
        );
    }
    
    constructor() {
        this.$el = $(TodoFormView.FORM_TEMPLATE)

    }

    renderList(form) {
        // this.$el.empty();
        this.$el.append(form.map(TodoFormView.createItemElement));
    }

    addData() {
        let value = this.view.input.value;
        this.model.addTask(value);
        this.view.renderTask(value);
    }
}