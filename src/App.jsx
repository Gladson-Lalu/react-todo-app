import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTrash } from "@fortawesome/fontawesome-free-solid";
import Greetings from "./components/greetings";

function App() {
  const [getText, SetText] = useState("");
  const [getList, UpdateList] = useState({ newToDos: [], completed: [] });

  console.log(getList);
  return (
    <div className="App">
      <div className="container">
        <Greetings></Greetings>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search your place"
            name="search"
            value={getText}
            onChange={(event) => {
              SetText(event.target.value);
            }}
          />
          <button
            type="button"
            className="button"
            onClick={() => {
              UpdateList((oldState) => ({
                newToDos: [...oldState.newToDos, getText],
                completed: [...oldState.completed],
              }));
              SetText("");
            }}
          >
            <FontAwesomeIcon icon={faPlus} size={"1x"} />
          </button>
        </div>
        {getList.newToDos.length != 0 && (
          <div className="todo">
            <h3 className="title">To-Do</h3>

            <ul className="list-group">
              {getList.newToDos.map((value, index) => (
                <li className="list-item" key={index}>
                  <h5>{value}</h5>
                  <div className="button-group">
                    <button
                      className="btn-done"
                      onClick={() =>
                        UpdateList((oldState) => ({
                          newToDos: oldState.newToDos.filter(
                            (itm) => itm != value
                          ),
                          completed: [...oldState.completed, value],
                        }))
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} size={"1x"} />
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        UpdateList((oldState) => ({
                          newToDos: oldState.newToDos.filter(
                            (itm) => itm != value
                          ),
                          completed: [...oldState.completed],
                        }))
                      }
                    >
                      <FontAwesomeIcon icon={faTrash} size={"1x"} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {getList.completed.length != 0 && (
          <div>
            <h3 className="title">Done</h3>
            <ul className="list-group">
              {getList.completed.map((value, index) => (
                <li className="list-item done" key={index}>
                  <h5>{value}</h5>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
