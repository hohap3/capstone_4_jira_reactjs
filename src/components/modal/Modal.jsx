import React from "react";
import { Modal } from "@mui/material";
const MyModal = ({ open,handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
          {children}
      </div>
    </Modal>
  );
};

export default MyModal;
