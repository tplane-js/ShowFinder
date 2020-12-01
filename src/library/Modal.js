import "./../static/styles/modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">
              <div className="label-container">
                <label>Open Shift</label>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <a className="links-title">Item 1</a>
                  </li>
                  <li>
                    <a className="links-title">Item 2</a>
                  </li>
                  <li>
                    <a className="links-title">Item 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-body">
              <h1>Panel Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehend
              </p>

              <div className="details">
                <div className="row">
                  <div className="title col-4">Case Id:</div>
                  <div className="col-8 info-text">
                    Case 1245125 28980325802358
                  </div>
                </div>

                <div className="row">
                  <div className="title col-4">Case Name:</div>
                  <div className="col-8 info-text">
                    Development case instance
                  </div>
                </div>

                <div className="row">
                  <div className="title col-4">Status:</div>
                  <div className="col-8 info-text">
                    <div className="statusActive">Active</div>
                  </div>
                </div>

                <div className="row">
                  <div className="title col-4">State:</div>
                  <div className="col-8 info-text">
                    Started on March 16th, 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-background"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
