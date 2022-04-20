import goToNext from "function/goToNext";
import { CORRECT, DUMMY } from "game-settings";
import { MainPartsProps } from "type";

const fonts = ["font-serif", "font-sans"];

const Stage3 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 21);
  return (
    <div className="w-full px-10 grid grid-cols-3 gap-2">
      {[...Array(21)].map((_, i) => (
        <div
          key={i}
          className={`text-lg sm:text-xl text-center w-full cursor-pointer ${
            fonts[Math.floor(Math.random() * 2)]
          }`}
          onClick={() => {
            goToNext({
              setMainState,
              state: i === correctPos ? "STAGE4" : "GAMEOVER",
            });
          }}
        >
          {i === correctPos ? CORRECT : DUMMY}
        </div>
      ))}
    </div>
  );
};

export default Stage3;
