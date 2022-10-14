import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { countNewUsers } from "../../../redux/features/users/userSlice";

// const data1 = [
//   {
//     name: "Page A",
//     "Active User": 4000,
//   },
//   {
//     name: "Page B",
//     "Active User": 3000,
//   },
//   {
//     name: "Page C",
//     "Active User": 2000,
//   },
//   {
//     name: "Page D",
//     "Active User": 2780,
//   },
//   {
//     name: "Page E",
//     "Active User": 1890,
//   },
//   {
//     name: "Page F",
//     "Active User": 2390,
//   },
//   {
//     name: "Page G",
//     "Active User": 3490,
//   },
// ];

export default function Chart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countNewUsers({}));
  }, [dispatch]);

  const users = useSelector((state) => state.users.allUser);
  //createdAt
  //console.log("userat ", users.data);

  //console.log("Userat ", users.data && users.data[0].day);

  const data2 = [
    {
      name: users.data && users.data[0].day,
      "Registered Users": users.data && users.data[0].count,
    },
    {
      name: users.data && users.data[1].day,
      "Registered Users": users.data && users.data[1].count,
    },
    {
      name: users.data && users.data[2].day,
      "Registered Users": users.data && users.data[2].count,
    },
    {
      name: users.data && users.data[3].day,
      "Registered Users": users.data && users.data[3].count,
    },
  ];

  return (
    <div className="m-5 p-5 dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      <h3 className="mb-5 dark:text-gray-300">
        Registered users in last 30 days
      </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data2}>
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="Registered Users" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
