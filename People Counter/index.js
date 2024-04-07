let count = 0;

function increment() {
  count++;
  peopleCount.textContent = count;
}

function decrement() {
  count--;
  peopleCount.textContent = count;
}

function save() {
  let saved = count + ' - ';
  saveEl.textContent += saved;
  count = 0;
  peopleCount.textContent = count;
}

function reset() {
  count = 0;
  peopleCount.textContent = count;
  saveEl.textContent = 'Previous entries: ';
}

let saveEl = document.getElementById('message');
