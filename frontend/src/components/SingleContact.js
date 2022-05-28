import React from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const SingleContact = ({
  _id,
  name,
  designation,
  company,
  industry,
  email,
  phNo,
  country,
  fetchData,
}) => {
  const [state, dispatch] = useStateValue();
  const handleClick = async (_id) => {
    const deleteConct = {};
    deleteConct[_id] = 1;
    const getRes = await fetch(process.env.REACT_APP_API + "/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: state.user.token,
      },

      body: JSON.stringify(deleteConct),
    });

    const response = await getRes.json();
    fetchData();
    console.log(response);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onClick={() =>
            dispatch({ type: actionType.ADD_MARK, payload: { id: _id } })
          }
        />
      </td>
      <td>{name}</td>
      <td>{designation}</td>
      <td>{company}</td>
      <td>{industry}</td>
      <td>{email}</td>
      <td>{phNo}</td>
      <td>{country}</td>
      <td>
        <button
          onClick={() => {
            handleClick(_id);
          }}
        >
          D
        </button>
      </td>
    </tr>
  );
};

export default SingleContact;
