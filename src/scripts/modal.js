import { renderReleases, renderSum, renderFilter } from "./render.js"
import { categoryLists, entryValues, outValues, insertedValues } from "./valuesData.js"


export function newReleaseRegister(list) {
   
    const modal = document.querySelector(".modalController")
    const inputModal = document.querySelector(".inputModal")
    const buttonIn = document.querySelector("#buttonIn")
    const buttonOut = document.querySelector("#buttonOut")
    const InsertValueButton = document.querySelector(".InsertValueButton")

    let categoryIdRelease = 0

    buttonIn.addEventListener("click", (event) => {
        event.preventDefault()
        categoryIdRelease = 0
    })

    buttonOut.addEventListener("click", (event) => {
        event.preventDefault()
        categoryIdRelease = 1
    })

    InsertValueButton.addEventListener("click", (event) => {
        event.preventDefault()

        let newRelease = {
            id: (list.length) + 1,
            value: parseFloat(+(inputModal.value)),
            categoryID: categoryIdRelease
        }

        const listReleases = document.querySelector(".listReleases")
        listReleases.innerHTML = []
        list.unshift(newRelease)
        renderReleases(list)
        renderSum(list)
        renderFilter()
        categoryLists(insertedValues, entryValues, outValues)
        modal.close()
    })


}

export function renderModal() {
    const modal = document.querySelector(".modalController")
    const buttonOpenModal = document.querySelector(".buttonOpenModal")

    buttonOpenModal.addEventListener("click", () => {
        modal.showModal()

        closeModal()
    })

}

function closeModal() {
    const modal = document.querySelector(".modalController")
    const closeButton = document.querySelector(".closeButton")

    closeButton.addEventListener("click", () => {
        modal.close()
    })

}
