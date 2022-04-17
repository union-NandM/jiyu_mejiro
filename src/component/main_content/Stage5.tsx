import goToNext from "function/goToNext";
import { MainPartsProps } from "type";

const animations = [
  "animate-blink11",
  "animate-blink12",
  "animate-blink13",
  "animate-blink21",
  "animate-blink22",
  "animate-blink23",
  "animate-blink31",
  "animate-blink32",
  "animate-blink33",
];

const Stage5 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 27);
  return (
    <div className="w-full px-10 grid grid-cols-3 gap-2">
      {[...Array(27)].map((_, i) =>
        i === correctPos ? (
          <div
            key={i}
            className={`text-lg sm:text-xl text-center w-full cursor-pointer ${
              animations[Math.floor(Math.random() * 9)]
            }`}
            onClick={() => {
              goToNext({ setMainState, state: "CLEAR" });
            }}
          >
            クソリプ
          </div>
        ) : (
          <div
            key={i}
            className={`text-lg sm:text-xl text-center w-full cursor-pointer ${
              animations[Math.floor(Math.random() * 9)]
            }`}
            onClick={() => {
              goToNext({ setMainState, state: "GAMEOVER" });
            }}
          >
            クリスプ
          </div>
        )
      )}
    </div>
  );
};

export default Stage5;
