import React from "react";
import Useritem from "./Useritem";
import propTypes from "prop-types";

const Users = (props) => {
  // state = {
  //   users: [
  //     {
  //       id: "12345",
  //       login: "aholachek",
  //       avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
  //       html_url: "https://github.com/aholachek",
  //     },
  //     {
  //       id: "123456",
  //       login: "aholachek",
  //       avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
  //       html_url: "https://github.com/aholachek",
  //     },
  //   ],
  // };

  console.log(props.users);
  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <Useritem key={user.id} className="" users={user} />
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Useritem.propTypes = {
  users: propTypes.array.isRequired,
};

export default Users;
