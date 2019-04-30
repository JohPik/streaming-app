// MY CODE  WORKING

const colors = [ {id:1, hue:'green'}, {id:2, hue:'yellow'}, {id:3, hue:'blue'}]

const mapMyArray = (array, param) =>
Object.assign({},
  ...array.map( index => {
    return ( {[index[param]]: index} )
    }
  )
)

mapMyArray(colors, "id")


// HIS CODE WORKING

const colors = [ {id:1, hue:'green'}, {id:2, hue:'yellow'}, {id:3, hue:'blue'}]

const arrayToObject = (arr, keyField) =>
  Object.assign({},
     ...arr.map( item => (
    {[item[keyField]]: item}
      )
    )
  )

arrayToObject(colors, "id")


// MY CODE  WORKING

const colors = [ {id:1, hue:'green'}, {id:2, hue:'yellow'}, {id:3, hue:'blue'}]

const mapMyArray = (array, param) =>
Object.assign({}, ...array.map( index => ( {[index[param]]: index} )))

return (mapMyArray(colors, "id"))
