import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Image,
  Divider,
  Message,
  Icon,
  Modal,
} from "semantic-ui-react";
import uploadPic from "../../utils/uploadPicToCloudinary";
import { submitNewPost } from "../../utils/postActions";
import ColorPicker from "./ColorPicker";
import CropImageModal from "./CropImageModal";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 700, tablet: 750, computer: 1080 },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

function CreatePost({ user, setPosts, trigger }) {
  const [newPost, setNewPost] = useState({ text: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const inputRef = useRef();

  const [error, setError] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    marginRight: "50px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await uploadPic(media);
      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await submitNewPost(
      newPost.text,
      newPost.location,
      picUrl,
      color,
      setPosts,
      setNewPost,
      setError
    );

    setMedia(null);
    URL.revokeObjectURL(mediaPreview);
    setMediaPreview(null);
    setLoading(false);
    setOpenCreateModal(false);
    setColor("#000000");
    setShowColorPicker(false);
  };

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
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Media greaterThanOrEqual="computer">
          <Modal
            onClose={() => setOpenCreateModal(false)}
            onOpen={() => setOpenCreateModal(true)}
            open={openCreateModal}
            trigger={trigger}
          >
            <Modal.Header>Create a post</Modal.Header>
            <Modal.Content image>
              <div
                onClick={() => inputRef.current.click()}
                style={addStyles()}
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
                {media === null ? (
                  <Icon name="plus" size="big" />
                ) : (
                  <>
                    <Image
                      style={{ height: "150px", width: "150px" }}
                      src={mediaPreview}
                      alt="PostImage"
                      centered
                      size="medium"
                    />
                  </>
                )}
              </div>
              <Modal.Description>
                <Form error={error !== null}>
                  <Message
                    error
                    onDismiss={() => setError(null)}
                    content={error}
                    header="Oops!"
                  />

                  <Form.Group>
                    <Form.TextArea
                      placeholder="Whats Happening"
                      name="text"
                      value={newPost.text}
                      onChange={handleChange}
                      rows={4}
                      width={14}
                      style={{ fontFamily: "Josefin Sans", color: `${color}` }}
                    />

                    <ColorPicker
                      setShowColorPicker={setShowColorPicker}
                      setColor={setColor}
                      color={color}
                      trigger={
                        <Button
                          style={{
                            backgroundColor: "#B23B79",
                            color: "white",
                            fontFamily: "Josefin Sans",
                            height: "60px",
                          }}
                        >
                          Choose text color
                        </Button>
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Input
                      value={newPost.location}
                      name="location"
                      onChange={handleChange}
                      label="Add Location"
                      icon="map marker alternate"
                      placeholder="Want to add Location?"
                    />

                    <input
                      ref={inputRef}
                      onChange={handleChange}
                      name="media"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                    />
                  </Form.Group>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
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
              <Button
                circular
                disabled={newPost.text === "" || loading}
                content={<strong>Post</strong>}
                style={{
                  backgroundColor: "#B23B79",
                  color: "white",
                  fontFamily: "Josefin Sans",
                }}
                icon="send"
                loading={loading}
                onClick={handleSubmit}
              />
            </Modal.Actions>
          </Modal>
        </Media>

        <Media between={["tablet", "computer"]}>
          <Modal
            onClose={() => setOpenCreateModal(false)}
            onOpen={() => setOpenCreateModal(true)}
            open={openCreateModal}
            trigger={trigger}
          >
            <Modal.Header>Create a post</Modal.Header>
            <Modal.Content image>
              <div
                onClick={() => inputRef.current.click()}
                style={addStyles()}
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
                {media === null ? (
                  <Icon name="plus" size="big" />
                ) : (
                  <>
                    <Image
                      style={{ height: "150px", width: "150px" }}
                      src={mediaPreview}
                      alt="PostImage"
                      centered
                      size="medium"
                    />
                  </>
                )}
              </div>
              <Modal.Description>
                <Form error={error !== null}>
                  <Message
                    error
                    onDismiss={() => setError(null)}
                    content={error}
                    header="Oops!"
                  />

                  <Form.Group>
                    <Form.TextArea
                      placeholder="Whats Happening"
                      name="text"
                      value={newPost.text}
                      onChange={handleChange}
                      rows={4}
                      width={14}
                      style={{ fontFamily: "Josefin Sans", color: `${color}` }}
                    />

                    <ColorPicker
                      setShowColorPicker={setShowColorPicker}
                      setColor={setColor}
                      color={color}
                      trigger={
                        <Button
                          style={{
                            backgroundColor: "#B23B79",
                            color: "white",
                            fontFamily: "Josefin Sans",
                            height: "60px",
                          }}
                        >
                          Choose text color
                        </Button>
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Input
                      value={newPost.location}
                      name="location"
                      onChange={handleChange}
                      label="Add Location"
                      icon="map marker alternate"
                      placeholder="Want to add Location?"
                    />

                    <input
                      ref={inputRef}
                      onChange={handleChange}
                      name="media"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                    />
                  </Form.Group>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
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
              <Button
                circular
                disabled={newPost.text === "" || loading}
                content={<strong>Post</strong>}
                style={{
                  backgroundColor: "#B23B79",
                  color: "white",
                  fontFamily: "Josefin Sans",
                }}
                icon="send"
                loading={loading}
                onClick={handleSubmit}
              />
            </Modal.Actions>
          </Modal>
        </Media>
        <Media between={["zero", "tablet"]}>
          <Modal
            onClose={() => setOpenCreateModal(false)}
            onOpen={() => setOpenCreateModal(true)}
            open={openCreateModal}
            trigger={trigger}
          >
            <Modal.Header>Create a post</Modal.Header>
            <Modal.Content image>
              <div
                onClick={() => inputRef.current.click()}
                style={addStyles()}
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
                {media === null ? (
                  <Icon name="plus" size="big" />
                ) : (
                  <>
                    <Image
                      style={{ height: "150px", width: "150px" }}
                      src={mediaPreview}
                      alt="PostImage"
                      centered
                      size="medium"
                    />
                  </>
                )}
              </div>
              <Modal.Description>
                <Form error={error !== null}>
                  <Message
                    error
                    onDismiss={() => setError(null)}
                    content={error}
                    header="Oops!"
                  />

                  <Form.Group>
                    <div>
                    <Form.TextArea
                      placeholder="Whats Happening"
                      name="text"
                      value={newPost.text}
                      onChange={handleChange}
                      rows={4}
                      width={14}
                      style={{ fontFamily: "Josefin Sans", color: `${color}` }}
                    />
                    </div>
                    
                <br/>

                    <ColorPicker
                      setShowColorPicker={setShowColorPicker}
                      setColor={setColor}
                      color={color}
                      trigger={
                        <Button
                          style={{
                            backgroundColor: "#B23B79",
                            color: "white",
                            fontFamily: "Josefin Sans",
                            height: "60px",
                            width: "100px"
                          }}
                        >
                         Choose text color
                        </Button>
                      }
                    />
                  </Form.Group>
                  <Divider hidden/>
                  <Form.Group>
                    <Form.Input
                      value={newPost.location}
                      name="location"
                      onChange={handleChange}
                      label="Add Location"
                      icon="map marker alternate"
                      placeholder="Want to add Location?"
                    />

                    <input
                      ref={inputRef}
                      onChange={handleChange}
                      name="media"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                    />
                  </Form.Group>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
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
              <Button
                circular
                disabled={newPost.text === "" || loading}
                content={<strong>Post</strong>}
                style={{
                  backgroundColor: "#B23B79",
                  color: "white",
                  fontFamily: "Josefin Sans",
                }}
                icon="send"
                loading={loading}
                onClick={handleSubmit}
              />
            </Modal.Actions>
          </Modal>
        </Media>
      </MediaContextProvider>
    </>
  );
}

export default CreatePost;
