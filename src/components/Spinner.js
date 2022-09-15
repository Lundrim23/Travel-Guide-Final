import { useState, useEffect } from "react";

import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "20% auto",
};

const Spinner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center z-50 absolute w-full h-full top-0 bg-gray-900/30">
        <div class="flex flex-col justify-center rounded-lg w-[300px] px-[40px] py-[30px] bg-[#1F2937]">
          <HashLoader
            color={"#6d6ff8"}
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
