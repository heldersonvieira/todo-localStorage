export const Storage = {
    set(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    get() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
}

export const Task = {
    all: Storage.get(),
}
