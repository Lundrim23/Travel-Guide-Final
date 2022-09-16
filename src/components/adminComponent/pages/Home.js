import React from "react";
import Chart from "./Chart";
import FeaturedInfo from "./FeaturedInfo";
import WidgetLg from "./WidgetLg";
import WidgetSm from "./WidgetSm";

function Home() {
  return (
    // home
    <div className="flex-auto w-10/12 dark:bg-neutral-900 transition delay-100">
      <FeaturedInfo />
      <Chart />

      {/* homewidget */}
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
