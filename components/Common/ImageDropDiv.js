import React, { useState } from "react";
import {
  Form,
  Segment,
  Image,
  Icon,
  Header,
  Divider,
  Button,
} from "semantic-ui-react";
import CropImageModal from "../Post/CropImageModal";

function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
  profilePicUrl,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CropImageModal
          mediaPreview={mediaPreview}
          setMediaPreview={setMediaPreview}
          setMedia={setMedia}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
            ref={inputRef}
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setHighlighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(true);

              const droppedFile = Array.from(e.dataTransfer.files);
              setMedia(droppedFile[0]);
              setMediaPreview(URL.createObjectURL(droppedFile[0]));
            }}
          >
            {mediaPreview === null ? (
              <>
                <Segment color={highlighted ? "green" : ""} placeholder basic>
                  <span style={{ textAlign: "center" }}>
                    <Image
                      src={profilePicUrl}
                      alt="Profile pic"
                      style={{ cursor: "pointer" }}
                      onClick={() => inputRef.current.click()}
                      size="small"
                      centered
                    />
                    <p className="font-link">
                      Drag n Drop or Click to upload image
                    </p>
                  </span>
                </Segment>
              </>
            ) : (
              <Segment color="green" placeholder basic>
                <Image
                  src={mediaPreview}
                  size="medium"
                  centered
                  style={{ cursor: "pointer" }}
                  onClick={() => inputRef.current.click()}
                />
              </Segment>
            )}
            {mediaPreview !== null && (
              <>
                <Divider hidden />

                <Button
                  content="Crop Image"
                  type="button"
                  primary
                  circular
                  onClick={() => setShowModal(true)}
                />
              </>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
}

export default ImageDropDiv;
