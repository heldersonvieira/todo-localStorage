export const getTask = () => {
    const input = document.querySelector('[data-description-task]');
    const description = input.value;
    const completed = false;

    return {
        description,
        completed,
    }
}
