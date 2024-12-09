import { exportMainAction } from "@/assets/redux/filterMode";
import { FilterTypes } from "@/assets/types/redux/filterMode.type";
import { ChangeEventHandler } from "react";
import { useDispatch} from "react-redux";

const SelectBox = () => {
  const dispatch = useDispatch()  
  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const filterType = e.target.value as FilterTypes
    const filterAction = exportMainAction(filterType)
    dispatch(
      filterAction()
    )
  }

  return (
    <select name="todos" className="filter-todo" onChange={changeHandler}>
      <option value="all" selected>All</option>
      <option value="completed">Completed</option>
      <option value="inCompleted">Incomplete</option>
    </select>
  );
};

export default SelectBox;
