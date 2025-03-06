import { useEffect } from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { Button } from "./Button";

export const Modal = ({ openModal, setOpenModal, opName, setOpName }) => {
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleModal = () => {
    setOpenModal(false);
  };

  return (
    openModal && (
      <div className="modal-overlay" onClick={handleModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="nav-modal">
            <button
              style={
                opName === "login"
                  ? { borderBottomColor: "var(--orange-color)" }
                  : {}
              }
              onClick={() => {
                setOpName("login");
              }}
            >
              Login
            </button>
            <button
              style={
                opName === "register"
                  ? { borderBottomColor: "var(--orange-color)" }
                  : {}
              }
              onClick={() => {
                setOpName("register");
              }}
            >
              Register
            </button>
          </div>
          {opName == "register" ? (
            <>
              <h2>Welcome, Start Your Journy</h2>
              <form className="form-container">
                <Input title="Email" />
                <Input title="Username" />
                <Input title="Password" />
                <Input title="Confirm Password" />
                <Button>Register</Button>
              </form>
            </>
          ) : (
            <>
              <h2>Welcome back</h2>
              <form className="form-container">
                <Input title="Email" />
                <Input title="Password" />
                <p className="login-content">
                  <div>
                    <input type="checkbox" />
                    Remeber Me!
                  </div>
                  <a>Forget Password ?</a>
                </p>
                <Button>Login</Button>
              </form>
            </>
          )}
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  setOpName: PropTypes.func,
  opName: PropTypes.string,
};
