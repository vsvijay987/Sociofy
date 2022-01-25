import React from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { logoutUser } from "../../utils/authUser";
import SearchField from "./SearchField";

function Navbar({ user: { email } }) {
  return (
    <Menu secondary style={{ boxShadow: "0 1px 1px rgb(0 0 0 / 0.2)" }}>
      <Menu.Item style={{ marginLeft: "40px" }}>
        <a href="./">
          <Image
            src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png"
            size="tiny"
          />
        </a>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <SearchField />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button
            icon="log out"
            content="Logout"
            type="submit"
            style={{
              backgroundColor: "#B23B79",
              color: "white",
              fontFamily: "Josefin Sans",
            }}
            onClick={() => logoutUser(email)}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
