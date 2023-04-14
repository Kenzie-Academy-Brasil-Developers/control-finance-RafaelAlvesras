export let insertedValues = [
  {
    id: 1,
    value: 90.0,
    categoryID: 0,
  },
  {
    id: 2,
    value: 40.0,
    categoryID: 1,
  },
  {
    id: 3,
    value: 15.5,
    categoryID: 0,
  },
];

export let entryValues = []

export let outValues = []

export function categoryLists(list, arrayOne, arrayTwo) {
    
   list.forEach(element => {
        if(element.categoryID === 0){
          arrayOne.push(element)
        } else if(element.categoryID === 1){
          element.value = (element.value) * -1
          arrayTwo.push(element)
        }
   });
}

