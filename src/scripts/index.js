import { categoryLists, entryValues, outValues, insertedValues } from "./valuesData.js"
import {renderReleases, renderSum, renderFilter} from "./render.js"
import {renderModal, newReleaseRegister} from "./modal.js"

renderReleases(insertedValues)
renderSum(insertedValues)
newReleaseRegister(insertedValues)
renderFilter()
renderModal()
categoryLists(insertedValues, entryValues, outValues)
