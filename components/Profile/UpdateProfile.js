import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Message,
  Divider,
  TextArea,
  Input,
} from "semantic-ui-react";
import ImageDropDiv from "../Common/ImageDropDiv";
import uploadPic from "../../utils/uploadPicToCloudinary";
import { profileUpdate } from "../../utils/profileActions";

const UpdateProfile = ({ UserProfile }) => {
  const inputRef = useRef();

  const [profile, setProfile] = useState({
    profilePicUrl: UserProfile.profilePicUrl,
    name: UserProfile.name,
    location: UserProfile?.location || "",
    profession: UserProfile?.profession || "",
    linkedin: (UserProfile.social && UserProfile.social.linkedin) || "",
    twitter: (UserProfile.social && UserProfile.social.twitter) || "",
  });
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form
        error={errorMsg !== null}
        loading={loading}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          let profilePicUrl;

          if (media !== null) {
            profilePicUrl = await uploadPic(media);
          }

          if (media !== null && !profilePicUrl) {
            setLoading(false);
            return setErrorMsg("Error Uploading Image");
          }

          await profileUpdate(profile, setLoading, setErrorMsg, profilePicUrl);
        }}
      >
        <Message
          onDismiss={() => setErrorMsg(null)}
          error
          content={errorMsg}
          attached
          header="Oops!"
        />

        <ImageDropDiv
          inputRef={inputRef}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          handleChange={handleChange}
          mediaPreview={mediaPreview}
          setMediaPreview={setMediaPreview}
          setMedia={setMedia}
          profilePicUrl={profile.profilePicUrl}
        />

        <div>
          <Form.Field
            required
            control={Input}
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Form.Field
            control={Input}
            name="profession"
            value={profile.profession}
            onChange={handleChange}
            placeholder="Profession"
          />
          <Form.Field
            control={Input}
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <Button
            content="Add Social Links"
            color="blue"
            icon="at"
            style={{ fontFamily: "Josefin Sans" }}
            type="button"
            onClick={() => setShowSocialLinks(!showSocialLinks)}
          />

          {showSocialLinks && (
            <>
              <Divider />

              <Form.Input
                icon="linkedin"
                iconPosition="left"
                name="linkedin"
                className="font-link"
                value={profile.linkedin}
                onChange={handleChange}
              />

              <Form.Input
                icon="twitter"
                iconPosition="left"
                name="twitter"
                value={profile.twitter}
                onChange={handleChange}
              />

              <Message
                icon="attention"
                style={{
                  color: "#B23B79",
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#FCFAFA",
                }}
                size="small"
                header="Social Media Links Are Optional!"
              />
            </>
          )}
        </div>

        <Divider hidden />

        <Button
          icon="pencil alternate"
          style={{
            backgroundColor: "#B23B79",
            color: "white",
            fontFamily: "Josefin Sans",
          }}
          disabled={profile.name === "" || loading}
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  );
};

export default UpdateProfile;
