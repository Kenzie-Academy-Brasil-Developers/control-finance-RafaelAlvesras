import { insertedValues } from "./valuesData.js"
import { emptyButtonOpenModal } from "./modal.js"

export function renderReleases(list) {
    const listReleases = document.querySelector(".listReleases")
    let emptyCard = renderEmptyList()

    if (list.length > 0) {
        list.forEach(element => {

            const listItem = document.createElement("li")
            const valueItem = document.createElement("h4")
            const typeDelDiv = document.createElement("div")
            const typeItem = document.createElement("p")
            const deleteItemButton = document.createElement("img")


            if (element.categoryID == 0) {
                typeItem.innerText = "Entrada"
            } else if (element.categoryID == 1) {
                typeItem.innerText = "Saída"
            }


            valueItem.innerText = `R$ ${element.value.toFixed(2)}`


            deleteItemButton.src = "./src/assets/img/trash.png"
            deleteItemButton.dataset.buttonID = element.id

            listItem.classList.add("listItem")
            valueItem.classList.add("valueItem")
            typeDelDiv.classList.add("typeDelDiv")
            typeItem.classList.add("typeItem")
            deleteItemButton.classList.add("deleteItemButton")

            listReleases.appendChild(listItem)
            listItem.append(valueItem, typeDelDiv)
            typeDelDiv.append(typeItem, deleteItemButton)

        })
    }
    else {
        listReleases.appendChild(emptyCard)
        emptyButtonOpenModal()
    }

    deleteRelease(list)
}

function deleteRelease(list) {
    const buttonsDelete = document.querySelectorAll(".deleteItemButton")

    buttonsDelete.forEach(button => {
        button.addEventListener("click", (event) => {

            const dataSetButtonID = event.target.dataset.buttonID

            const findReleaseIndex = list.findIndex(release => release.id === Number(dataSetButtonID))

            const removedRelease = list.splice(findReleaseIndex, 1)

            const listReleases = document.querySelector(".listReleases")
            listReleases.innerHTML = []
            removedRelease
            renderReleases(list)
            renderSum(list)
        })
    }
    )
}

export function renderFilter() {

    const ButtonFilterAll = document.querySelector("#filterAll")
    const ButtonFilterIn = document.querySelector("#filterIn")
    const ButtonFilterOut = document.querySelector("#filterOut")
    const listReleases = document.querySelector(".listReleases")


    ButtonFilterAll.addEventListener("click", () => {
        listReleases.innerHTML = []
        renderReleases(insertedValues)
        renderSum(insertedValues)
    })

    ButtonFilterIn.addEventListener("click", () => {
        listReleases.innerHTML = []
        const newArr = insertedValues.filter(elt => elt.categoryID === 0)
        renderReleases(newArr)
        renderSum(newArr)
    })

    ButtonFilterOut.addEventListener("click", () => {
        listReleases.innerHTML = []
        const newArr = insertedValues.filter(elt => elt.categoryID === 1)
        renderReleases(newArr)
        renderSum(newArr)
    })

}

export function renderSum(list) {
    const sumAll = document.querySelector(".sumAll")

    let sumAllResult = list.reduce((accumulator, element) => accumulator + element.value, 0)

    sumAll.innerText = `R$ ${sumAllResult.toFixed(2)}`
}

function renderEmptyList() {

    const divEmptyList = document.createElement("li")
    const divEmptyTitle = document.createElement("h3")
    const divEmptyText = document.createElement("p")

    divEmptyTitle.innerText = "Nenhum valor cadastrado"
    divEmptyText.innerText = "Registrar novo valor"

    divEmptyList.append(divEmptyTitle, divEmptyText)

    divEmptyList.classList.add("emptyCard")
    divEmptyTitle.classList.add("divEmptyTitle")
    divEmptyText.classList.add("divEmptyText")

    return divEmptyList
}

// correctValuesInserteds(insertedValues)