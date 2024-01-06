let quests = JSON.parse(localStorage.getItem("quests")) || [];

    if (!quests || quests.length === 0) {
        localStorage.setItem("quests", JSON.stringify([
            {
                id: 1,
                name: "Your math test",
                priority: "ultra",
                description: "You need to study before the test",
                completed: false,
                due: "2030-01-01"
            },
        
            {
                id: 2,
                name: "Your business report",
                priority: "ultra",
                description: "You need to send your business report before the due date",
                completed: false,
                due: "2030-01-01"
            },
        ]));
        tasks = JSON.parse(localStorage.getItem("quests")) || [];
    }

//Auto-save to localStorage function
function saveQuestsToLocalStorage() {
    localStorage.setItem("quests", JSON.stringify(quests));
}

let questListRef;

function questList() {
    const existCheck = document.querySelector(".list");
    console.log("Existing list:", existCheck);
    if (existCheck) {
        console.log("List already exists.");
        questListRef = existCheck;
        return existCheck;
    }
    const list = document.createElement("ul");
    list.classList.add("list");
    document.getElementById("quest-list").appendChild(list);
    //Sortable.js library is used to drag and drop list items
    Sortable.create(list, {
        sort: true,
        animation: 150,
        onEnd: function (event) {
            const updatedQuests = Array.from(list.children).map(item => {
                const id = parseInt(item.dataset.questId);
                return quests.find(quest => quest.id === id);
            });
            quests = updatedQuests.filter(Boolean);
            saveQuestsToLocalStorage();
        }
    });
    questListRef = list;
    return list;
}

const questCreator = document.getElementById("quest-creator");

//Every update in the tasks (deletion, creation, edition or order changes) should evoke this function to update it to viewer
function displayQuests() {
    const list = questListRef || questList();
    console.log("Displaying quests. Quests:", quests);

    if (list) {
        list.innerHTML = "";
        quests.forEach(quest => {
            const listItem = document.createElement("li");
            listItem.className = `list-item`;
            listItem.innerHTML = `
            !<span class="quest-name">${quest.name}</span> <span class="quest-comp">(Completed: ${quest.completed})</span>
            <button onclick="toggleCompletion(${quest.id})">Toggle</button>
            <button onclick="editQuest(${quest.id})">Edit</button>
            <button class="delete-btn" onclick="deleteQuest(${quest.id})">Delete</button>
            <span class="quest-due"> Due: ${quest.due}</span> <br>
            <span class="quest-desc">(${quest.description})</span>
            `;
            listItem.dataset.questId = quest.id;
            if (quest.completed) {
                listItem.classList.add("quest-completed");
            }
            list.appendChild(listItem);
        });
    }
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
    heading.textContent = "Are you sure you want to delete all quests?";

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
        localStorage.removeItem("quests");
        quests = [];
        displayQuests();
        saveQuestsToLocalStorage();
}

function toggleCompletion(questId) {
    const quest = quests.find(quest => quest.id === questId);
    const listItem = document.querySelector(`.listItem[data-quest-id="${questId}"]`);
    if (quest) {
        quest.completed = !quest.completed;
        displayQuests();
        saveQuestsToLocalStorage();
        }
    }

function editQuest(questId) {
    const quest = quests.find(quest => quest.id === questId);
    if (quest) {
        const editModal = document.createElement("div");
        editModal.id = "edit-modal";
        editModal.className = "modal";

        const questEditor = document.createElement("form");
        questEditor.id = "quest-editor";

        const closeButton = document.createElement("span");
        closeButton.className = "close";
        closeButton.innerHTML = "&times;";
        closeButton.onclick = closeEditModal;

        const heading = document.createElement("h2");
        heading.textContent = "Edit Quest";
        
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        const editedName = document.createElement("input");
        editedName.type = "text";
        editedName.id = "edited-name";
        editedName.value = quest.name;
        editedName.placeholder = "Name of the quest";
        editedName.required = true;

        const editedDesc = document.createElement("input");
        editedDesc.type = "text";
        editedDesc.id = "edited-desc";
        editedDesc.value = quest.description;

        const editedDue = document.createElement("input");
        editedDue.type = "date";
        editedDue.id = "edited-due";
        editedDue.value = quest.due;

        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.textContent = "Save Changes";

        modalContent.appendChild(closeButton);
        modalContent.appendChild(heading);
        modalContent.appendChild(editedName);
        modalContent.appendChild(editedDesc);
        modalContent.appendChild(editedDue);
        modalContent.appendChild(saveButton);
        questEditor.appendChild(modalContent);

        questEditor.addEventListener("submit", function (e) {
            e.preventDefault();
            quest.name = editedName.value;
            quest.description = editedDesc.value;
            quest.due = editedDue.value;
            editModal.style.display = "none";
            saveQuestsToLocalStorage();
            displayQuests();
        });
        editModal.appendChild(questEditor);
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

function deleteQuest(questId) {
    const deleteModal = document.createElement("div");
    deleteModal.id = "delete-modal";
    deleteModal.className = "modal";

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeDeleteModal;

    const heading = document.createElement("h2");
    heading.className = "alert-heading";
    heading.textContent = "Are you sure you want to delete this quest?";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const buttonYes = document.createElement("button");
    buttonYes.type = "button";
    buttonYes.className = "delete-btn";
    buttonYes.textContent = "Yes";
    buttonYes.onclick = () => {
        confirmedDelete(questId);
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

function confirmedDelete(questId) {
    const questIndex = quests.findIndex(quest => quest.id === questId);
    
    if (questIndex !== -1) {
        quests.splice(questIndex, 1);
        displayQuests();
        saveQuestsToLocalStorage();
    }
}

questCreator.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("quest-name").value;
    const description = document.getElementById("quest-desc").value;
    const due = document.getElementById("quest-due").value;

    const newQuest = {
        id: quests.length + 1,
        name,
        description,
        due,
        completed: false
    };

    quests.push(newQuest);
    displayQuests();
    questCreator.reset();

    saveQuestsToLocalStorage();
})

displayQuests();