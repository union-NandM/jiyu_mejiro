import { CORRECT } from "game-settings";
import { MainStateType } from "type";

type Props = {
  parentState: MainStateType;
};

const Header = ({ parentState }: Props) => {
  const fontSize =
    parentState === "TOP" ? "text-3xl sm:text-6xl" : "text-lg sm:text-xl";
  const py = parentState === "TOP" ? "py-10 sm:py-20" : "py-3 sm:py-6";
  return (
    <header>
      <h1 className={`${fontSize} text-center ${py} tracking-widest`}>
        {CORRECT}をさがせ
      </h1>
    </header>
  );
};

export default Header;
