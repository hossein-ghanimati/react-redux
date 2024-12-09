import { AllAction, CompletedAction, filterActionTypes, FilterTypes, InCompletedAction } from "../types/redux/filterMode.type";


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

const setAllAction = (): AllAction => ({
  type: "ALL",
  payload: "all"
})
const setCompletedAction = (): CompletedAction => ({
  type: "COMPLETED",
  payload: "completed"
})
const setInCompletedAction = (): InCompletedAction => ({
  type: "INCOMPLETED",
  payload: "inCompleted"
})

export const exportMainAction = (filterType: FilterTypes ) => {
  switch (filterType) {
    case "all":
      return setAllAction
    case "completed":
      return setCompletedAction
    case "inCompleted":
      return setInCompletedAction
  
    default:
      return setAllAction;
  }
}

export default filterModeReducer;