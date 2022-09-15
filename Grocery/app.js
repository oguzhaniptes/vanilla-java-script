const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')

const grocery = document.getElementById('grocery')

const submitBtn = document.querySelector('.submit-btn')
const clearBtn = document.querySelector('.clear-btn')

const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')

const deleteBtn = document.querySelector('.delete-btn')


let editElement
let editFlag = false
let editID = ""

form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)

function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        const element = document.createElement('article')
        element.classList.add('grocery-item')
        const attr = document.createAttribute('data-id')
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = ` 
        <article class="">
            <p class="title">${value}</p>
            <dic class="btn-container">
                <button type="button" class="edit-btn">edit</button>
                <button type="button" class="delete-btn">delete</button>
            </dic>
        </article>`;
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click', deleteItem)
        editBtn.addEventListener('click', editItem)
        list.appendChild(element)
        displayAlert("item added to the list", "succes")
        container.classList.add('show-container')
        addToLocalStorage(id, value)
        setBackToDefault()

    }
    else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert("value changed ", "success")
        editLocalStorage(editID, value)
        setBackToDefault()
    }
    else {
        displayAlert("please enter value", "danger")
    } 4
}

function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(() => {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

function addToLocalStorage(id, value) {
    grocery.value = ''
    editFlag = false
    editID = ''
    submitBtn.textContent = 'submit'
}

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "lol";
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item')
    items.forEach(function (item) {
        list.removeChild(item)
    })
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefault()
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement.parentElement
    const id = element.dataset.id
    // console.log(id);
    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefault()
}
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    // console.log(element);
    editElement = e.currentTarget.parentElement.previousElementSibling
    // console.log(editElement);
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit";
}

function removeFromLocalStorage(id) {

}
function editLocalStorage(id, value) {

}
