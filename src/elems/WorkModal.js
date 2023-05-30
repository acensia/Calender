import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function WorkModal({ modalIsOpen, closeModal, afterOpenModal, props }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        <form>
          <div>
            <h2>{props["mem"]}</h2>
            <div>{props["work"]}</div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default WorkModal;
