import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

var overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.1,
  maxOverscroll: 100,
};

var options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};
export default Scroll;
