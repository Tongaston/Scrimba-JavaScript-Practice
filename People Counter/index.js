let peopleCount = document.getElementById('peopleCount');
let incrementBtn = document.getElementById('incrementBtn');
let saveBtn = document.getElementById('saveBtn');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    peopleCount.innerHTML = count;
});

saveBtn.addEventListener('click', () => { 
    localStorage.setItem('peopleCount', count);
    alert('Data saved successfully');
});
