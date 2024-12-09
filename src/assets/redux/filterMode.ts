import { filterActionTypes, FilterTypes } from "../types/redux/filterMode.type";


const filterModeReducer = (state: FilterTypes = "all", action: filterActionTypes): FilterTypes => {
  let currentState = state
  switch (action.type) {
    case "ALL":
      currentState = action.payload
      break
    case "COMPLETED": 
      currentState = action.payload
      break

    case "INCOMPLETED":
      currentState = action.payload
      break
  
    default:
      currentState = "all"
  }

  return currentState
}

export default filterModeReducer;