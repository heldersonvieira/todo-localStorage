import { Task, Storage } from './Storage.js';

export const reloadAndMark = () => {
    const tasksCompleted = Task.all.filter(task => (task.completed == true));
    const tasksDOM = document.querySelectorAll('.task__content');
    tasksDOM.forEach(taskDOM => {
        tasksCompleted.forEach(taskComplete => {
            if (taskDOM.textContent == taskComplete.description)
                taskDOM.parentElement.classList.add('done');
        })
    })
}

const complete = (event, index) => {
    const button = event.target.parentElement;
    const boxButtons = button.parentElement;
    const task = boxButtons.parentElement;

    Task.all[index].completed = !Task.all[index].completed;
    Storage.set(Task.all);

    return task.classList.toggle('done');
}

export const CompleteTask = (index) => {
    const completeButton = document.createElement('button');
    completeButton.classList.add('task__btn');
    completeButton.innerHTML = `
        <img src="./assets/img/botao-verificado.svg" alt="Completar Tarefa">`;


    completeButton.addEventListener('click', (event) => {
        complete(event, index);
    });

    return completeButton;
}
