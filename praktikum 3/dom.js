let currentFontSize = 16;
let isDarkMode = false;

function addTask() {
    const input = document.getElementById('newTask');
    const taskText = input.value.trim();
    if (taskText === '') return;
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;
    taskSpan.ondblclick = () => editTask(taskSpan);
    taskSpan.onclick = () => toggleComplete(taskSpan);
    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'close';
    deleteBtn.innerHTML = '×';
    deleteBtn.onclick = () => deleteTask(li);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = '';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

function deleteTask(element) {
    element.remove();
}

function editTask(element) {
    const oldText = element.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldText;
    input.style.width = '80%';
    element.textContent = '';
    element.appendChild(input);
    input.focus();
    function saveEdit() {
        const newText = input.value.trim();
        if (newText !== '') {
            element.textContent = newText;
        } else {
            element.textContent = oldText;
        }
    }
    input.onblur = saveEdit;
    input.onkeypress = (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        }
    };
}

function toggleComplete(element) {
    element.classList.toggle('completed');
}

// Page appearance functions
function changeBackgroundColor() {
    const color = document.getElementById('bgColor').value;
    if (!isDarkMode) {
        document.body.style.backgroundColor = color;
    }
}

function changeFontSize(action) {
    if (action === 'increase') {
        currentFontSize = Math.min(currentFontSize + 2, 24);
    } else {
        currentFontSize = Math.max(currentFontSize - 2, 12);
    }
    document.body.style.fontSize = currentFontSize + 'px';
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? '#333' : document.getElementById('bgColor').value;
    document.body.style.color = isDarkMode ? '#393939ff' : '#000';
}

function changeFontStyle() {
    const fontFamily = document.getElementById('fontStyle').value;
    document.body.style.fontFamily = fontFamily;
}

function resetAppearance() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    document.body.style.fontSize = '16px';
    document.body.style.fontFamily = 'Arial, sans-serif';
    currentFontSize = 16;
    isDarkMode = false;
}