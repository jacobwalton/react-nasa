import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import "./photo-of-the-day.css";
import { useState, useEffect } from "react";
import photoData from "../../util/photoData";

const useStyles = makeStyles((theme) => ({
  modal: {
    overflow: "scroll",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "100px 20px 30px 10px",
    height: "fit-content",
    width: "fit-content",
    padding: "30px",
    outline: "none",
    boxShadow: theme.shadows[5],
  },
}));

export default function TransitionsModal() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    photoData.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="photo-btn" type="button" onClick={handleOpen}>
        Photo Of The Day
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className="apod-container">
            <h1>NASA API</h1>
            <h2>Astronomy Photo of the Day</h2>
            {apod && (
              <article>
                <header>
                  {apod.title} - <i>{apod.date}</i>
                </header>
                <div className="mainContent">
                  <img
                    src={apod.url}
                    alt="APOD"
                    width="200"
                    height="fit-content"
                  />
                  <p>{apod.explanation}</p>
                  <pre
                    style={{
                      overflowX: "auto",
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                  ></pre>
                </div>
              </article>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
