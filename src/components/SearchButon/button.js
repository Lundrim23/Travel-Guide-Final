import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import AlbaniaImg from "./Images/Albania.jpg";
import KosovaImg from "./Images/Kosovo.jpg";
import MacedoniaImg from "./Images/Macedonia.jpg";
import MontenegroImg from "./Images/Montenegro.jpg";
import Searchbar from "../SearchBar/Searchbar";
import Data from "../SearchBar/searchBarData.json";

import "./styles.css";

const ButtonStyles = styled.div`
  .vertical {
    border-left: 6px solid black;
    height: 200px;
    position: absolute;
    left: 50%;
  }

  .root {
    width: 900px;
  }

  margin: auto;

  text-align: center;

  display: flex;
  display: grid;
  margin-top: 40px;

  .button-home {
    color: white;
    background: #202936;
    height: 54px;
    width: 14%;
    border-radius: 25px;
    box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ButtonStyles>
      <div>
        <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-#1F2937-600 border-2 border-#1F2937-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#1F2937] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative" onClick={handleClickOpen}>
            Search destinations
          </span>
        </button>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "800px",
                height: "100%",
                maxHeight: "510px",
              },
            },
          }}
        >
          <button
            className="md:ml-[450px] ml-[200px] mt-4 mr-4 "
            onClick={handleClose}
          >
            <MdClose className="float-right" size={25} />
          </button>

          <DialogContent>
            <DialogContentText>
              <div className="searchbar_div">
                <h1 className="textPlaces">Search by places</h1>
                <div className="Search">
                  <div className="SearchButton">
                    <Searchbar
                      className="center"
                      placeholder="Search for destination..."
                      data={Data}
                    ></Searchbar>
                  </div>
                </div>
              </div>

              <div className="searchgrid_div">
                <h1 className="mb-4">Search by counties</h1>

                <div className="  md:grid-rows-2 md:grid-flow-col inline-grid  gap-4 ">
                  <div className="w-40">
                  <Link to="/search" state={{ AlbaniaCheck: true }}>
                      <img
                        className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl w-[150px]"
                        src={AlbaniaImg}
                        alt=""
                      ></img>
                    </Link>
                    <h1 className="mt-2">Albania</h1>
                  </div>

                  <div className="w-40">
                    <Link to="/search" state={{ MacedoniaCheck: true }}>
                      <img
                        className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl w-[190px]"
                        src={MacedoniaImg}
                        alt=""
                      ></img>
                    </Link>
                    <h1 className="mt-2">Macedonia</h1>
                  </div>

                  <div className="w-40">
                    <Link to="/search" state={{ KosovoCheck: true }}>
                      <img
                        className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl w-[150px]"
                        src={KosovaImg}
                        alt=""
                      ></img>
                    </Link>
                    <h1 className="mt-2">Kosovo</h1>
                  </div>

                  <div className="w-40">
                    <Link to="/search" state={{ MontenegroCheck: true }}>
                      <img
                        className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl w-[150px]"
                        src={MontenegroImg}
                        alt=""
                      ></img>
                    </Link>
                    <h1 className="mt-2">Montenegro</h1>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </ButtonStyles>
  );
}
