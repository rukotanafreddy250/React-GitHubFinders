import React from "react";
import propTypes from "prop-types";

const Useritem = (props) => {
  // this.state = {
  //   id: "12345",
  //   login: "aholachek",
  //   avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
  //   html_url: "https://github.com/aholachek",
  // };
  //   const { avatar_url, id, html_url, login } = this.state;

  const { avatar_url, html_url } = props.users;
  return (
    <div className="Card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px", border: "radius" }}
      />
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
Useritem.propTypes = {
  users: propTypes.array.isRequired,
};
export default Useritem;
