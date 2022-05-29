import React, { useEffect, useRef, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import SingleContact from "./SingleContact";
import { actionType } from "../context/reducer";
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

const AllContact = () => {
  const navigate = useNavigate();
  const [isPop, setIsPop] = useState();
  const [state, dispatch] = useStateValue();
  const inputRef = useRef();

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
      dispatch({ type: actionType.SEARCH, payload: { key: "" } });
    } else {
      dispatch({ type: actionType.REMOVE_USER });
      navigate("/");
    }
    // console.log(data.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (state.isChecked) {
      inputRef.current.checked = true;
    } else {
      inputRef.current.checked = false;
    }
  });

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
    dispatch({ type: actionType.REMOVE_MARK });
    fetchData();
    console.log(response);
  };

  return (
    <div className="mainpage">
      <Aside />
      <section className="hero">
        <div className="filter">
          <div>
            <button>Select Data</button>
            <button>Filter</button>
          </div>
          <div>
            <button onClick={handleClick}>Delete</button>
            <button
              onClick={() => {
                setIsPop(!isPop);
              }}
            >
              Import
            </button>
            <button>Export</button>
          </div>
        </div>
        {isPop ? <Popup fetchData={fetchData} setIsPop={setIsPop} /> : ""}

        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  ref={inputRef}
                  onClick={() => {
                    dispatch({ type: actionType.CHECKED });
                  }}
                />
              </th>
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
            {state.filter.map((obj) => (
              <SingleContact key={obj._id} {...obj} fetchData={fetchData} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AllContact;
