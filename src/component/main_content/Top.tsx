import { Button } from "component/main_content/parts";
import { MainPartsProps } from "type";
import goToNext from "function/goToNext";

const Top = ({ setMainState }: MainPartsProps) => (
  <>
    <Button
      clickFunc={() => {
        goToNext({ setMainState, state: "STAGE1" });
      }}
      additionalStyle="mt-20"
    >
      スタート
    </Button>
    <Button
      clickFunc={() => {
        setMainState("RULE");
      }}
      additionalStyle="mt-10"
    >
      ルール
    </Button>
  </>
);

export default Top;
