import React, { useRef, useEffect } from "react";
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
  const inputRef = useRef();
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

  useEffect(() => {
    if (state.isChecked) {
      inputRef.current.checked = true;
    } else if (Object.keys(state.mark).length === 0) {
      inputRef.current.checked = false;
    }
  });

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          ref={inputRef}
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
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleContact;
