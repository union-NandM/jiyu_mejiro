import React from "react";
import { Button } from "component/main_content/parts";
import { MainPartsProps } from "type";

const Rule = ({ setMainState }: MainPartsProps) => (
  <div className="w-full px-10">
    <h2 className="text-2xl">ルール</h2>
    <p className="text-base mt-5 leading-loose">
      <span className="text-green-700">クリスプ</span>の中に紛れた
      <span className="text-blue-600">クソリプ</span>
      を見つけるゲームです。
    </p>
    <p className="text-base mt-5 leading-loose">
      表示後 3 秒以内に<span className="text-blue-600">クソリプ</span>
      を押してください。
      <br />
      <span className="text-blue-600">クソリプ</span>
      を押すと、すぐに次のステージへうつります。
      <br />
      <span className="text-green-700">クリスプ</span>
      を押す、または 3 秒経過するとその場でゲームオーバーとなってしまいます。
    </p>
    <p className="text-base mt-5 leading-loose">
      全 5 ステージです。
      <br />
      クリアを目指して頑張ってください。
    </p>

    <Button
      clickFunc={() => {
        setMainState("TOP");
      }}
      additionalStyle="my-10"
      size="small"
    >
      戻る
    </Button>
  </div>
);

export default Rule;
