import React, { useState } from "react";
import { Popup } from "semantic-ui-react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ setColor, trigger, color }) => {
  return (
    <Popup
      on="click"
      pinned
      trigger={trigger}
      position='left center'
      content={
        <>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </>
      }
    />
  );
};

export default ColorPicker;
