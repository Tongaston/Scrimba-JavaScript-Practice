import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
  databaseURL:
    'https://practice-8e0cd-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, 'shoppingList')

const inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
const shoppingListEl = document.getElementById('cart-list')

addButtonEl.addEventListener('click', () => {
  let inputValue = inputFieldEl.value
  push(shoppingListInDB, inputValue)
  clearInputValue()
})

onValue(shoppingListInDB, (snapshot) => {
  let snapshotValue = Object.entries(snapshot.val())
  clearList()

  for (let i = 0; i < snapshotValue.length; i++) {
    let currentItem = snapshotValue[i]

    let currentItemID = currentItem[0]
    let currentItemValue = currentItem[1]

    addElementToList(currentItem)
  }
})

function addElementToList(item) {
  let itemID = item[0]
  let itemValue = item[1]

  let newEL = document.createElement('li')
  newEL.textContent = itemValue

  shoppingListEl.append(newEL)
}

function clearInputValue() {
  inputFieldEl.value = ''
}

function clearList() {
  shoppingListEl.innerHTML = ''
}
