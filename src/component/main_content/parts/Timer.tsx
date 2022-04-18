import { TIME_LIMIT } from "game-settings";
import { useEffect, useRef, useState } from "react";
import { MainPartsProps } from "type";

const useTimer = (onUpdate: () => void) => {
  const updateManager = useRef<() => void>(() => {});

  useEffect(() => {
    updateManager.current = onUpdate;
  }, [onUpdate]);
  useEffect(() => {
    const intervalid = setInterval(() => updateManager.current(), 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);
};

const Timer = ({ setMainState }: MainPartsProps) => {
  const [time, updateTime] = useState(TIME_LIMIT);
  useTimer(() => updateTime((t) => t - 1));
  useEffect(() => {
    if (time === 0) setMainState("GAMEOVER");
  }, [time, setMainState]);

  return <div className="text-xl text-center">{time}</div>;
};

export default Timer;
