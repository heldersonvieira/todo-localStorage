import { Task } from "./Storage.js";
import { App } from "../main.js";
import { Storage } from "./Storage.js";
import { reloadAndMark } from "./CompleteTask.js";

const remove = (event) => {
    const button = event.target.parentElement;
    const boxButtons = button.parentElement;
    const task = boxButtons.parentElement;

    return task.remove();
}

export const RemoveTask = (index) => {
    const removeButton = document.createElement('button');
    removeButton.classList.add('task__btn');
    removeButton.innerHTML = `
        <img src="./assets/img/remove.svg" alt="Remover Tarefa">`;
    
    removeButton.addEventListener('click', (event) => {
        remove(event);
        Task.all.splice(index, 1);
        Storage.set(Task.all);
        App.reload(Task.all);
    });

    reloadAndMark();

    return removeButton;
}
