import React, { FC } from "react";
import classNames from "classnames";
import useGlobal from "hooks/useGlobal";
import { TraceSpeed, traceSpeedMapped } from "services/Tracer";

const SpeedSelect: FC<{ onSelect?: (value: TraceSpeed) => void }> = ({ onSelect }) => {
  const { speed, setSpeed } = useGlobal();

  return (
    <div className="flex flex-col absolute right-0 top-0 z-10 text-sm font-semibold rounded-bl-md rounded-tr-md overflow-hidden shadow-md bg-white dark:bg-gray-700">
      {Object.values(TraceSpeed).map((item) => (
        <button
          key={item}
          onClick={() => {
            setSpeed(item);
            onSelect && onSelect(item);
          }}
          className={classNames("px-2 py-1 transition-colors cursor-pointer", {
            "bg-primary-400 hover:bg-primary-500 text-white": speed === item,
            "hover:bg-gray-100 dark:hover:bg-gray-800": speed !== item,
          })}
        >
          {traceSpeedMapped[item]}x
        </button>
      ))}
    </div>
  );
};

export default SpeedSelect;
