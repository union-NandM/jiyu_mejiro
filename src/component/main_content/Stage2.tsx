import goToNext from "function/goToNext";
import { MainPartsProps } from "type";

const fontSize = [
  "text-lg sm:text-xl",
  "text-xl sm:text-2xl",
  "text-2xl sm:text-3xl",
];
const pos = [
  "top-0 right-0",
  "bottom-0 left-0",
  "bottom-0 right-0",
  "top-0 left-0",
];
const Stage2 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 10);
  return (
    <div className="w-full px-10 grid grid-cols-2">
      {[...Array(10)].map((_, i) =>
        i === correctPos ? (
          <div className="w-full h-4 sm:h-20 relative" key={i}>
            <span
              className={`absolute ${fontSize[Math.floor(Math.random() * 3)]} ${
                pos[Math.floor(Math.random() * 4)]
              }`}
              onClick={() => {
                goToNext({ setMainState, state: "STAGE3" });
              }}
            >
              クソリプ
            </span>
          </div>
        ) : (
          <div className="w-full h-20 relative" key={i}>
            <span
              className={`absolute ${fontSize[Math.floor(Math.random() * 3)]} ${
                pos[Math.floor(Math.random() * 4)]
              }`}
              onClick={() => {
                setMainState("GAMEOVER");
              }}
            >
              クリスプ
            </span>
          </div>
        )
      )}
    </div>
  );
};
export default Stage2;
