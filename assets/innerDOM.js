import { CompleteTask } from '../components/CompleteTask.js';
import { RemoveTask } from '../components/RemoveTask.js';

export const innerTask = (task, index) => {
    const list = document.querySelector('[data-tasks-list]');
    const boxButtons = document.createElement('div');
    const taskElement = document.createElement('li');

    boxButtons.classList.add('task__buttons');
    
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <p class="task__content" data-content>${task}</p>`;

    list.appendChild(taskElement);
    taskElement.appendChild(boxButtons);
    boxButtons.appendChild(CompleteTask(index));
    boxButtons.appendChild(RemoveTask(index));
}
