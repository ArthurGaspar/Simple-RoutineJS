document.addEventListener('DOMContentLoaded', () => {
    const buttonRoutine = document.getElementById('button-routine');
    if (buttonRoutine) {
        buttonRoutine.addEventListener('click', () => {
            window.location.href = 'myroutine.html';
        });
    }

    const buttonQuests = document.getElementById('button-quests');
    if (buttonQuests) {
        buttonQuests.addEventListener('click', () => {
            window.location.href = 'quests.html';
        });
    }

    const buttonOptions = document.getElementById('button-options');
    if (buttonOptions) {
        buttonOptions.addEventListener('click', () => {
            window.location.href = 'options.html';
        });
    }

    const buttonIndex = document.getElementById('button-index');
    if (buttonIndex) {
        buttonIndex.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});