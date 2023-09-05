import { useState, useEffect } from "react";

import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "20% auto",
};

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center z-50 absolute w-full h-full top-0 bg-gray-900/30">
        <div className="flex flex-col justify-center rounded-lg w-[300px] px-[40px] py-[30px] bg-[#1F2937]">
          <HashLoader
            color={"#fffff"}
            loading={loading}
            size={50}
            cssOverride={override}
          />
        </div>
      </div>
    );
  }
};

export default Spinner;
