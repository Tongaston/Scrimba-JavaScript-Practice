import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {
  getDatabase,
  ref,
  push,
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
  addElementToList(inputValue)
  clearInputValue()
})

function addElementToList(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}

function clearInputValue() {
  inputFieldEl.value = ''
}
