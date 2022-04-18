import { Button } from "component/main_content/parts";
import { MainPartsProps } from "type";
import goToNext from "function/goToNext";
import { CORRECT, DUMMY } from "game-settings";

const Stage1 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 4);

  return (
    <div className="grid grid-cols-2 gap-2 w-full px-10 mt-20">
      {[...Array(4)].map((_, i) =>
        i === correctPos ? (
          <Button
            key={i}
            clickFunc={() => {
              goToNext({ setMainState, state: "STAGE2" });
            }}
            additionalStyle="w-full"
            size="grid"
          >
            {CORRECT}
          </Button>
        ) : (
          <Button
            key={i}
            clickFunc={() => {
              goToNext({ setMainState, state: "GAMEOVER" });
            }}
            size="grid"
            additionalStyle="w-full"
          >
            {DUMMY}
          </Button>
        )
      )}
    </div>
  );
};

export default Stage1;
