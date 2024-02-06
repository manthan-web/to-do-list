const listContainer = document.querySelector('.list-container')
const inputBox = document.querySelector('.input-element')
const addBtn = document.querySelector('.add-btn')





addBtn.addEventListener('click', ()=> {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.classList.add('cross-btn')
    li.innerHTML = inputBox.value
    listContainer.append(li)
    btn.innerHTML = `&#10060;`
    li.appendChild(btn)


    btn.addEventListener('click', ()=> {
        btn.parentElement.remove()
    })

    li.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('checked')
            console.log("Hello world")
        } else {
            console.log("Not hello world")
        }
    })




    inputBox.value = ''
})

