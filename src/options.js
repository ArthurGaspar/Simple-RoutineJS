document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-button');
    const savedColorMode = localStorage.getItem('colorMode');

    //Default
    const defaultColorMode = savedColorMode || 'light';
    document.body.classList.add(defaultColorMode);
    document.body.querySelectorAll('*').forEach(element => {
        element.classList.add(defaultColorMode);
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedMode = button.getAttribute('data-color-mode');
            colorButtons.forEach(btn => {
                document.body.classList.remove(btn.getAttribute('data-color-mode'));
            });

            document.body.classList.add(selectedMode);
            document.body.querySelectorAll('*').forEach(element => {
                element.classList.add(selectedMode);
            });

            //Send color mode to localStorage
            localStorage.setItem('colorMode', selectedMode);
            ipcRenderer.send('colorChange', selectedMode);
        });
    });
});