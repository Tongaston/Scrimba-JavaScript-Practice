let myLeads = []
const inputEl = document.getElementById('input-el')
const buttonSave = document.getElementById('input-btn')
const buttonDelete = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const ulEl = document.getElementById('ul-el')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(arr) {
  let listItems = ''
  for (let i = 0; i < arr.length; i++) {
    listItems += `<li>
      <a targuet="_blank" href="${arr[i]}">
      ${arr[i]}
      </a>
      </li>`
  }
  ulEl.innerHTML = listItems
}

buttonSave.addEventListener('click', () => {
  if (inputEl.value === '') {
    return
  } else {
    myLeads.push(inputEl.value)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ''
  }
})

buttonDelete.addEventListener('dblclick', () => {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
