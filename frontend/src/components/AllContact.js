import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import SingleContact from "./SingleContact";
import { actionType } from "../context/reducer";
import { useNavigate } from "react-router-dom";

const AllContact = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  const fetchData = async () => {
    const jsonData = await fetch(process.env.REACT_APP_API + "/contact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: state.user.token,
      },
    });

    const data = await jsonData.json();
    if (data.status === "sucess") {
      dispatch({
        type: actionType.ADD_CONTACT,
        payload: { contact: data.data },
      });
    }
    // console.log(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    const getRes = await fetch(process.env.REACT_APP_API + "/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: state.user.token,
      },
      body: JSON.stringify(state.mark),
    });

    const response = await getRes.json();
    fetchData();
    console.log(response);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{ position: "absolute", right: "40px", top: "-30px" }}
        onClick={handleClick}
      >
        Delete
      </button>
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" onClick={() => {}} />
            </td>
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
            <th>Industry</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.contact.map((obj) => (
            <SingleContact key={obj._id} {...obj} fetchData={fetchData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllContact;
