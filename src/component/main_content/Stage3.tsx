import goToNext from "function/goToNext";
import { CORRECT, DUMMY } from "game-settings";
import { MainPartsProps } from "type";

const Stage3 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 21);
  return (
    <div className="w-full px-10 grid grid-cols-3 gap-2">
      {[...Array(21)].map((_, i) =>
        i === correctPos ? (
          <div
            key={i}
            className="text-lg sm:text-xl text-center w-full cursor-pointer"
            onClick={() => {
              goToNext({ setMainState, state: "STAGE4" });
            }}
          >
            {CORRECT}
          </div>
        ) : (
          <div
            key={i}
            className="text-lg sm:text-xl text-center w-full cursor-pointer"
            onClick={() => {
              goToNext({ setMainState, state: "GAMEOVER" });
            }}
          >
            {DUMMY}
          </div>
        )
      )}
    </div>
  );
};

export default Stage3;
