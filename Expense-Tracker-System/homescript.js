const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const select = document.getElementById('todo-select');
const num = document.getElementById('todo-num');
const inc = document.getElementById('income');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim() || num.value.trim()) {
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="todo-item">${input.value}</span>
      <span class="todo-item">${num.value}</span>
      <span class="todo-item">${select.value}</span>
      <button class="remove-btn">Remove</button>
    `;

    // Add event listener for remove button
    li.querySelector('.remove-btn').addEventListener('click', () => {
      li.remove();
    });

    // Add the list item to the list
    list.appendChild(li);

    // Clear the input values
    input.value = '';
    num.value = '';
  }

  if (select.value === 'income') {
    inc.innerHTML = num.value;
  }
});
