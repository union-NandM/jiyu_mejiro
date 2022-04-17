import React, { useState } from "react";
import {
  Top,
  Rule,
  Stage1,
  Stage2,
  Stage3,
  Stage4,
  Stage5,
  GameOver,
  Clear,
} from "component/main_content";
import { Timer, Header } from "component/main_content/parts";
import { MainStateType } from "type";
const Main = () => {
  const [gameState, setMainState] = useState<MainStateType>("TOP");
  return (
    <div>
      <Header parentState={gameState} />
      {gameState === "TOP" ? (
        <Top setMainState={setMainState} />
      ) : gameState === "RULE" ? (
        <Rule setMainState={setMainState} />
      ) : gameState === "STAGE1" ? (
        <>
          {/* <Timer setMainState={setMainState} /> */}
          <Stage1 setMainState={setMainState} />
        </>
      ) : gameState === "STAGE2" ? (
        <>
          {/* <Timer setMainState={setMainState} /> */}
          <Stage2 setMainState={setMainState} />
        </>
      ) : gameState === "STAGE3" ? (
        <>
          {/* <Timer setMainState={setMainState} /> */}
          <Stage3 setMainState={setMainState} />
        </>
      ) : gameState === "STAGE4" ? (
        <>
          {/* <Timer setMainState={setMainState} /> */}
          <Stage4 setMainState={setMainState} />
        </>
      ) : gameState === "STAGE5" ? (
        <>
          {/* <Timer setMainState={setMainState} /> */}
          <Stage5 setMainState={setMainState} />
        </>
      ) : gameState === "CLEAR" ? (
        <Clear setMainState={setMainState} />
      ) : gameState === "GAMEOVER" ? (
        <GameOver setMainState={setMainState} />
      ) : null}
    </div>
  );
};

export default Main;
