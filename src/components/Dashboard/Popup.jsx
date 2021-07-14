import React, { forwardRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import Slide from '@material-ui/core/Slide';
import Slider from "react-slick";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Popup = ({ open=false, handleClose,images=[] }) => {
  console.log(images)
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Slider className="overflow-hidden" style={{height: 350}}>
          {images?.map?.(el=>{
            return <div className="d-flex overflow-hidden mw-100 justify-content-center align-items-center h-100">
              {el.type === "image" ? <img src={el.src} className={`mask`} alt={el.type}/> : el.type === "video" ?<video autoPlay loop playsInline className={`w-100 h-100 overflow-hidden mask`} src={el?.src}></video> : <div>The File You've uploaded is not Correct</div> }
            </div>
          })}
        </Slider>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
