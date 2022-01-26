import React, { useState } from "react";
import { Popup } from "semantic-ui-react";
import { ChromePicker } from "react-color";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 700, tablet: 750, computer: 1080 },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const ColorPicker = ({ setColor, trigger, color }) => {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Media greaterThanOrEqual="computer">
          <Popup
            on="click"
            pinned
            trigger={trigger}
            position="left center"
            content={
              <>
                <ChromePicker
                  color={color}
                  onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
              </>
            }
          />
        </Media>
        <Media between={["tablet", "computer"]}>
          <Popup
            on="click"
            pinned
            trigger={trigger}
            position="left center"
            content={
              <>
                <ChromePicker
                  color={color}
                  onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
              </>
            }
          />
        </Media>
        <Media between={["zero", "tablet"]}><Popup
            on="click"
            pinned
            trigger={trigger}
            position="top center"
            content={
              <>
                <ChromePicker
                  color={color}
                  onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
              </>
            }
          /></Media>
      </MediaContextProvider>
    </>
  );
};

export default ColorPicker;
