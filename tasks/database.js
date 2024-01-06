let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (!tasks || tasks.length === 0) {
        localStorage.setItem("tasks", JSON.stringify([
        {
            id: 1,
            name: "Daily planning",
            priority: "ultra",
            description: "Plan everything you want and need to do for you day",
            completed: false
        },
    
        {
            id: 2,
            name: "Gym",
            priority: "ultra",
            description: "Physical exercise to enhance fitness and well-being.",
            completed: false
        },
    
        {
            id: 3,
            name: "Programming",
            priority: "ultra",
            description: "Learn and code",
            completed: false
        },
    
        {
            id: 4,
            name: "Language learning",
            priority: "ultra",
            description: "Enter a whole new culture and enhance your communication skills worldwide",
            completed: false
        },
    
        {
            id: 5,
            name: "Plan your next day",
            priority: "ultra",
            description: "Organize your tasks for the upcoming day",
            completed: false
        },
    
        {
            id: 6,
            name: "Make art",
            priority: "daily",
            description: "Express your creativity and your most internal feelings",
            completed: false
        },
    
        {
            id: 7,
            name: "Read books",
            priority: "daily",
            description: "Dive into a new world, gain knowledge or meet a new perspective of life",
            completed: false
        },
    
        {
            id: 8,
            name: "Play games",
            priority: "daily",
            description: "Spending time with fun tasks is also important for your life",
            completed: false
        },
    
        {
            id: 9,
            name: "Sing",
            priority: "daily",
            description: "Train your vocal abilities, or just sing it out loud",
            completed: false
        },
    
        {
            id: 10,
            name: "Make a donation",
            priority: "daily",
            description: "Support positive change",
            completed: false
        },
    
        {
            id: 11,
            name: "Stop and think",
            priority: "daily",
            description: "Take a moment of reflection",
            completed: false
        },
    
        {
            id: 12,
            name: "Self-steem",
            priority: "daily",
            description: "Have a positive and confident perception of yourself",
            completed: false
        },
    
        {
            id: 13,
            name: "Meditate",
            priority: "almostdaily",
            description: "Find inner peace and embrance mindfulness",
            completed: false
        },
    
        {
            id: 14,
            name: "Go outside",
            priority: "almostdaily",
            description: "At the park, at the neighbourhood or anywhere you want",
            completed: false
        },
    
        {
            id: 15,
            name: "Watch something",
            priority: "almostdaily",
            description: "Watch something for entertainment, knowledge or culture",
            completed: false
        },
    
        {
            id: 16,
            name: "Learn to play an instrument",
            priority: "common",
            description: "Cultivate your musical talent",
            completed: false
        },
    
        {
            id: 17,
            name: "Listen to music",
            priority: "common",
            description: "Anything you're feeling to",
            completed: false
        },
    
        {
            id: 18,
            name: "Study something",
            priority: "common",
            description: "Gather knowledge for your life",
            completed: false
        },
    
        {
            id: 19,
            name: "Draw something",
            priority: "common",
            description: "Give colors, shapes and strokes to this world",
            completed: false
        },
    
        {
            id: 20,
            name: "Write a novel",
            priority: "common",
            description: "The words are sharper than the swords",
            completed: false
        },
    
        {
            id: 21,
            name: "Game development",
            priority: "common",
            description: "Craft virtual experiences through code and design",
            completed: false
        },
    
        {
            id: 22,
            name: "Study for college",
            priority: "common",
            description: "For your academic pursuits",
            completed: false
        },
    
        {
            id: 23,
            name: "Culinary",
            priority: "common",
            description: "Explore the art of cooking",
            completed: false
        },
    
        {
            id: 24,
            name: "Teach yourself something new",
            priority: "common",
            description: "Embark on a new journey to learn new skills",
            completed: false
        },
    
        {
            id: 25,
            name: "Take care of your garden",
            priority: "common",
            description: "It's harder than it looks like",
            completed: false
        },
    
        {
            id: 26,
            name: "Religious studies",
            priority: "common",
            description: "Understand religious beliefs and their practices",
            completed: false
        },
    
        {
            id: 27,
            name: "Plan your travel",
            priority: "common",
            description: "Organize your next adventure",
            completed: false
        },
    
        {
            id: 28,
            name: "Organize your workspace",
            priority: "common",
            description: "A messy room can disturb your life in ways you couldn't imagine",
            completed: false
        },
    
        {
            id: 29,
            name: "Watch a movie in a different language",
            priority: "neutral",
            description: "It's a nice way to develop your listening skills in a new language",
            completed: false
        },
    
        {
            id: 30,
            name: "Do something you miss doing",
            priority: "neutral",
            description: "Sometimes, we need to reconnect with ourselves",
            completed: false
        },
    
        {
            id: 31,
            name: "Do something you really need to do",
            priority: "neutral",
            description: "Get that most essential task of the moment",
            completed: false
        },
    
        {
            id: 32,
            name: "Break your bad habits",
            priority: "neutral",
            description: "Get away from negative and repetitive behaviours",
            completed: false
        },
    
        {
            id: 33,
            name: "Play sports",
            priority: "neutral",
            description: "It promotes health, teamwork and well-being",
            completed: false
        },
    
        {
            id: 34,
            name: "Study philosophy",
            priority: "neutral",
            description: "Explore the depths of life, society and existence",
            completed: false
        },
    
        {
            id: 35,
            name: "Write in your diary",
            priority: "neutral",
            description: "Capture moments of your own narrative",
            completed: false
        },
    
        {
            id: 36,
            name: "Organize your virtual space",
            priority: "neutral",
            description: "Organize and backup your most valuable files",
            completed: false
        },
    
        {
            id: 37,
            name: "Clean your house",
            priority: "neutral",
            description: "Create a comfortable and clean living space",
            completed: false
        },
    
        {
            id: 38,
            name: "Economic studies",
            priority: "neutral",
            description: "Understand the principe of economics on society and on your own life",
            completed: false
        },
    
        {
            id: 39,
            name: "Talk to someone you miss",
            priority: "neutral",
            description: "Reconnection is about sincerity and humbleness",
            completed: false
        },
    
        {
            id: 40,
            name: "Read the news",
            priority: "neutral",
            description: "Stay informed about the current world events",
            completed: false
        },
    
        {
            id: 41,
            name: "Elevate your business",
            priority: "neutral",
            description: "Enhance your professional abilities and networking",
            completed: false
        },
    
        {
            id: 42,
            name: "Explore the neighbourhood",
            priority: "neutral",
            description: "Appreaciate the local surroundings",
            completed: false
        },
    
        {
            id: 43,
            name: "Spend time with your friends/family",
            priority: "neutral",
            description: "Have new memories and experiences with the ones you love",
            completed: false
        },
    
        {
            id: 44,
            name: "Dance",
            priority: "ocasional",
            description: "Express yourself",
            completed: false
        },
    
        {
            id: 45,
            name: "Watch some comedy",
            priority: "ocasional",
            description: "Sometimes, we just need to laugh a bit",
            completed: false
        },
    
        {
            id: 46,
            name: "Try to have a lucid dream",
            priority: "ocasional",
            description: "Can you have a lucid dream?",
            completed: false
        },
    
        {
            id: 47,
            name: "Compose a song",
            priority: "ocasional",
            description: "Dwelve into musical creativity and compose the lyrics of a song",
            completed: false
        },
        ]));
        tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    }

//Auto-save to localStorage function
function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const priorities = ["ultra", "daily", "almostdaily", "common", "neutral", "ocasional"];
const taskLists = {};

//Lists of different priorities are not interchangeable
function priorityLists() {
    priorities.forEach(priority => {
        const list = document.createElement("ul");
        list.classList.add(`list-${priority}`);
        document.getElementById("task-list").appendChild(list);
        taskLists[priority] = list;
        //Sortable.js library is used to drag and drop list items
        Sortable.create(taskLists[priority], {
            sort: true,
            animation: 150,
            onEnd: function (event) {
                const updatedTasks = [];
                priorities.forEach(priority => {
                    const taskIds = Array.from(taskLists[priority].children).map(item => item.dataset.taskId);
                    taskIds.forEach(id => {
                        const task = tasks.find(t => t.id === parseInt(id));
                        if (task) {
                            updatedTasks.push(task);
                        }
                    });
                });
                tasks = updatedTasks;
                saveTasksToLocalStorage();
            }
        });
    });
}

priorityLists();
const taskCreator = document.getElementById("task-creator");

//Every update in the tasks (deletion, creation, edition or order changes) should evoke this function to update it to viewer
function displayTasks() {
    Object.values(taskLists).forEach(list => (list.innerHTML = ""));
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.className = `listItem item-${task.priority}`;
        listItem.innerHTML = `
            <span class="task-name">${task.name}</span> <span class="task-props">(Priority: ${task.priority}) (Completed: ${task.completed})</span>
            <button onclick="toggleCompletion(${task.id})">Toggle</button>
            <button onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button> <br>
            <span class="task-desc">(${task.description})</span>
            `;
            listItem.dataset.taskId = task.id;
            if (task.completed) {
                listItem.classList.add("task-completed");
            }
            taskLists[task.priority].appendChild(listItem);
    });
}

function shuffleList(array) {
    console.log('Teste', array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomizeTasks() {
        shuffleList(tasks);
        displayTasks();
        saveTasksToLocalStorage();
}

function deleteAll() {
    const deleteModal = document.createElement("div");
    deleteModal.id = "delete-modal";
    deleteModal.className = "modal";

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeDeleteModal;

    const heading = document.createElement("h2");
    heading.className = "alert-heading";
    heading.textContent = "Are you sure you want to delete all tasks?";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const buttonYes = document.createElement("button");
    buttonYes.type = "button";
    buttonYes.className = "delete-btn";
    buttonYes.textContent = "Yes";
    buttonYes.onclick = () => {
        confirmedDeleteAll();
        closeDeleteModal();
    };

    const buttonNo = document.createElement("button");
    buttonNo.textContent = "No";
    buttonNo.onclick = closeDeleteModal;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(buttonYes);
    modalContent.appendChild(buttonNo);
    deleteModal.appendChild(modalContent);
    document.body.appendChild(deleteModal);

    function closeDeleteModal() {
        deleteModal.style.display = "none";
    }

    window.addEventListener("click", function (event) {
        if (event.target === deleteModal) {
            closeDeleteModal();
        }
    })

    deleteModal.style.display = "block";
}

function confirmedDeleteAll() {
        localStorage.removeItem("tasks");
        tasks = [];
        displayTasks();
        saveTasksToLocalStorage();
}

function toggleCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    const listItem = document.querySelector(`.listItem[data-task-id="${taskId}"]`);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
        saveTasksToLocalStorage();
        }
    }

function toggleAll(completed) {
    tasks.forEach(task => {
        task.completed = completed;
    });
    displayTasks();
    saveTasksToLocalStorage();
}

function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        const editModal = document.createElement("div");
        editModal.id = "edit-modal";
        editModal.className = "modal";

        const taskEditor = document.createElement("form");
        taskEditor.id = "task-editor";

        const closeButton = document.createElement("span");
        closeButton.className = "close";
        closeButton.innerHTML = "&times;";
        closeButton.onclick = closeEditModal;

        const heading = document.createElement("h2");
        heading.textContent = "Edit Task";
        
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        const editedName = document.createElement("input");
        editedName.type = "text";
        editedName.id = "edited-name";
        editedName.value = task.name;
        editedName.placeholder = "Name of the task";
        editedName.required = true;

        const editedPrior = document.createElement("select");
        editedPrior.id = "edited-prior";
        editedPrior.required = true;
        const priorityOpts = [
            { value: "ultra", label: "Ultra Priority" },
            { value: "daily", label: "Daily" },
            { value: "almostdaily", label: "Almost Daily" },
            { value: "common", label: "Weekly Common" },
            { value: "neutral", label: "Weekly Neutral" },
            { value: "ocasional", label: "Ocasional" },
        ]
        priorityOpts.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.text = optionData.label;
            editedPrior.appendChild(option);
        })

        const editedDesc = document.createElement("input");
        editedDesc.type = "text";
        editedDesc.id = "edited-desc";
        editedDesc.value = task.description;

        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.textContent = "Save Changes";

        modalContent.appendChild(closeButton);
        modalContent.appendChild(heading);
        modalContent.appendChild(editedName);
        modalContent.appendChild(editedPrior);
        modalContent.appendChild(editedDesc);
        modalContent.appendChild(saveButton);
        taskEditor.appendChild(modalContent);

        taskEditor.addEventListener("submit", function (e) {
            e.preventDefault();
            task.name = editedName.value;
            task.priority = editedPrior.value;
            task.description = editedDesc.value;
            editModal.style.display = "none";
            saveTasksToLocalStorage();
            displayTasks();
        });
        editModal.appendChild(taskEditor);
        document.body.appendChild(editModal);

        function closeEditModal() {
            editModal.style.display = "none";
        }

        window.addEventListener("click", function (event) {
            if (event.target === editModal) {
                closeEditModal();
            }
        })

        editModal.style.display = "block";
    }
}

function deleteTask(taskId) {
    const deleteModal = document.createElement("div");
    deleteModal.id = "delete-modal";
    deleteModal.className = "modal";

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeDeleteModal;

    const heading = document.createElement("h2");
    heading.className = "alert-heading";
    heading.textContent = "Are you sure you want to delete this task?";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const buttonYes = document.createElement("button");
    buttonYes.type = "button";
    buttonYes.className = "delete-btn";
    buttonYes.textContent = "Yes";
    buttonYes.onclick = () => {
        confirmedDelete(taskId);
        closeDeleteModal();
    };

    const buttonNo = document.createElement("button");
    buttonNo.textContent = "No";
    buttonNo.onclick = closeDeleteModal;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(buttonYes);
    modalContent.appendChild(buttonNo);
    deleteModal.appendChild(modalContent);
    document.body.appendChild(deleteModal);

    function closeDeleteModal() {
        deleteModal.style.display = "none";
    }

    window.addEventListener("click", function (event) {
        if (event.target === deleteModal) {
            closeDeleteModal();
        }
    })

    deleteModal.style.display = "block";
}

function confirmedDelete(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        const task = tasks[taskIndex];
        const taskList = taskLists[task.priority];

        if (taskList) {
            const listItem = Array.from(taskList.children).find(
                li => li.textContent.includes(task.name) && li.textContent.includes(`Priority: ${task.priority}`)
            );

            if (listItem) {
                taskList.removeChild(listItem);
            }
        }

        tasks.splice(taskIndex, 1);
        displayTasks();
        saveTasksToLocalStorage();
    }
}

taskCreator.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("task-name").value;
    const priority = document.getElementById("task-prior").value;
    const description = document.getElementById("task-desc").value;

    const newTask = {
        id: tasks.length + 1,
        name,
        priority,
        description,
        completed: false
    };

    tasks.push(newTask);
    displayTasks();
    taskCreator.reset();

    saveTasksToLocalStorage();
})

displayTasks();