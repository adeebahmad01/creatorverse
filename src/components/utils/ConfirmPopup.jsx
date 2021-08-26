import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";

export default function AlertDialog({ open, onSuccess, onClose, name }) {
  console.log(open);
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this {name.split("s")[0]}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This may effect other items related to this {name.split("s")[0]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button
            variant="outlined"
            color="error"
            onClick={onSuccess}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
