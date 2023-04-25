fetch('http://localhost:3000/monsters')
    .then(resp => resp.json())
    .then(monsters => {
        console.log(monsters)
        const newMonsters = monsters.slice(0,50)
        console.log(newMonsters)
        newMonsters.forEach(monster => displayMonster(monster))
        createNewMonster()
    })

const monsterContainer = document.querySelector("#monster-container")
const createMonster = document.querySelector("#create-monster")

function displayMonster(monster){
    const pTag = document.createElement("p")
    pTag.innerText = `Name: ${monster.name}, Age: ${monster.age}, Description: ${monster.description}`
    monsterContainer.appendChild(pTag)
}

function createNewMonster(){
    const form = document.createElement("form")
    createMonster.appendChild(form)

    const nameInput = document.createElement("input")
    nameInput.placeholder = 'name...'
    form.appendChild(nameInput)

    const ageInput = document.createElement("input")
    ageInput.placeholder = 'age...'
    form.appendChild(ageInput)

    const descriptionInput = document.createElement("input")
    descriptionInput.placeholder = 'description...'
    form.appendChild(descriptionInput)

    const submitMonster = document.createElement('input')
    submitMonster.type = 'submit'
    submitMonster.value = 'Submit'
    form.appendChild(submitMonster)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/monsters', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                age: ageInput.value,
                description: descriptionInput.value
            })
        })
    })
}