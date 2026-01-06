// DOM Elements
const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Functions
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = 'note-item' + (note.completed ? ' completed' : '');
        
        li.innerHTML = `
            <span>${note.text}</span>
            <div class="note-actions">
                <button class="complete-btn">${note.completed ? 'Undo' : 'Done'}</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Complete toggle
        li.querySelector('.complete-btn').addEventListener('click', () => {
            notes[index].completed = !notes[index].completed;
            saveNotes();
            renderNotes();
        });

        // Delete note
        li.querySelector('.delete-btn').addEventListener('click', () => {
            notes.splice(index, 1);
            saveNotes();
            renderNotes();
        });

        notesList.appendChild(li);
    });
}

// Add new note
addBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if(noteText === '') return;
    notes.push({ text: noteText, completed: false });
    noteInput.value = '';
    saveNotes();
    renderNotes();
});

// Render notes on load
renderNotes();
