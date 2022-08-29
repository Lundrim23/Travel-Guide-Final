import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import AlbaniaImg from "./Images/Albania.png";
import KosovaImg from "./Images/Kosovo.png";
import MacedoniaImg from "./Images/Macedonia.png";
import MontenegroImg from "./Images/Montenegro.png";

const ButtonStyles = styled.div`
  text-align: center;
  // margin: auto;
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
    //box-shadow: 0 5px 16px 23px rgba(0, 0, 0, 0.2);
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
        <button class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-#1F2937-600 border-2 border-#1F2937-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span class="absolute left-0 block w-full h-0 transition-all bg-[#1F2937] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative" onClick={handleClickOpen}>
            Search destinations
          </span>
        </button>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <button
            className="md:ml-[450px] ml-[200px] mt-4 mr-4 md"
            onClick={handleClose}
          >
            <MdClose size={25} />
          </button>

          <DialogContent>
            <DialogContentText>
              <h1 className="text-[16px]  font-bold">Search by country</h1>
              <div className="grid md:grid-rows-2 md:grid-flow-col  gap-4 mt-6 ml-8">
                <div className="w-40">
                  <a href="/Albania" className=" w-30">
                    <img
                      className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl ease-in duration-200"
                      src={AlbaniaImg}
                      alt=""
                    ></img>
                  </a>
                  <h1 className="mt-2">Albania</h1>
                </div>

                <div className="w-40">
                  <a href="/Macedonia" className=" w-40">
                    <img
                      className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl ease-in duration-200"
                      src={MacedoniaImg}
                      alt=""
                    ></img>
                  </a>
                  <h1 className="mt-2">Macedonia</h1>
                </div>

                <div className="w-40">
                  <a href="/Kosovo" className=" w-40">
                    <img
                      className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl ease-in duration-200"
                      src={KosovaImg}
                      alt=""
                    ></img>
                  </a>
                  <h1 className="mt-2">Kosovo</h1>
                </div>

                <div className="w-40">
                  <a href="/Montenegro" className=" w-40">
                    <img
                      className="rounded-[20px] h-40 border-[2px] border-stone-200 hover:border-black hover:border-[1px] hover:shadow-2xl ease-in duration-200"
                      src={MontenegroImg}
                      alt=""
                    ></img>
                  </a>
                  <h1 className="mt-2">Montenegro</h1>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </ButtonStyles>
  );
}
