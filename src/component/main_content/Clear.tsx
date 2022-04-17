import { MainPartsProps } from "type";
import { Button } from "component/main_content/parts";

const Clear = ({ setMainState }: MainPartsProps) => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-32 sm:mt-20 mb-16">
        ゲームクリア
      </h2>
      <Button
        clickFunc={() => {
          setMainState("TOP");
        }}
        size="small"
      >
        トップ画面へ
      </Button>
    </div>
  );
};

export default Clear;
