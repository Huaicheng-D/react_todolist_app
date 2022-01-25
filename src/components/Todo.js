// Props: Key Value pairs
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Vanilla JavaScript Code:
  // document.querySelector('button').addEventListener('click');

  // React Code:
  // modalIsOpen store the value in useState

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function cancelModalHandler() {
    setModalIsOpen(false);
    console.log("cancel is Clicked!");
  }
  function confirmModalHandler() {
    setModalIsOpen(false);
    console.log("confirm is Clicked!");
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={cancelModalHandler} onConfirm={confirmModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
