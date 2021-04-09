import React from "react";

const Alert = ({ alert }) => {
  console.log(alert);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
    )
  );
};

// import React, { Component } from "react";

// export default class Alert extends Component {
//   render() {
//     return (
//       <div className={`alert alert-${this.props.msg.type}`}>
//         {this.props.alert.msg}
//       </div>
//     );
//   }
// }
export default Alert;
