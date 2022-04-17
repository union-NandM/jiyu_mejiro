import MainPartsProps from "type/MainPartsProps";
import MainStateType from "type/MainStateType";

type GoToNextArg = MainPartsProps & {
  state: MainStateType;
};

const goToNext = ({ setMainState, state }: GoToNextArg) => {
  setMainState(null);
  setTimeout(() => {
    setMainState(state);
  }, 500);
};

export default goToNext;
