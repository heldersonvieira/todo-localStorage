import { innerTask } from './assets/innerDOM.js';
import { getTask } from './assets/getValues.js';
import { Task, Storage } from './components/Storage.js';
import { reloadAndMark } from './components/CompleteTask.js';

export const App = {
    init() {      
        const buttonAdd = document.querySelector('[data-button-add]');
        buttonAdd.addEventListener('click', (event) => {
            event.preventDefault();

            if (getTask().description.trim() == '') {
                return;
            } 

            Task.all.push(getTask());
            Storage.set(Task.all);            
            
            App.reload(Task.all);
        
            document.querySelector('[data-description-task]').value = '';
        })
    
        App.reload(Task.all);
        reloadAndMark();
    },

    reload(tasks) {
        document.querySelector('[data-tasks-list]').innerHTML = '';
        tasks.forEach((task, index) => {
            innerTask(task.description, index);
        });
    }
}

App.init();
