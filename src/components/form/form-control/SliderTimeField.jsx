import { Slider } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useForm } from "react-hook-form";

function SliderTimeField(props) {
  const { label, timeRemaining, timeSpent } = props;

  return (
    <div className="flex flex-col my-2">
      <label className="mb-4 text-sm text-gray-600 font-medium">{label}</label>
      <div className="">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-4">
            <AccessTimeIcon />
            <Slider
              sx={{ cursor: "default" }}
              max={Number(timeRemaining) + Number(timeSpent)}
              value={timeSpent}
            />
          </div>
          <div className="flex justify-between">
            <p>{timeSpent ? `${timeSpent}h logged` : "No time logged"}</p>
            <p>{timeRemaining ? `${timeRemaining}h remaining` : "0h remaining"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderTimeField;
