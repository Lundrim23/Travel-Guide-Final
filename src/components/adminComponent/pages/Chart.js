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
import { getAllUsers } from "../../../redux/features/users/userSlice";

const data = [
  {
    name: "Page A",
    "Active User": 4000,
  },
  {
    name: "Page B",
    "Active User": 3000,
  },
  {
    name: "Page C",
    "Active User": 2000,
  },
  {
    name: "Page D",
    "Active User": 2780,
  },
  {
    name: "Page E",
    "Active User": 1890,
  },
  {
    name: "Page F",
    "Active User": 2390,
  },
  {
    name: "Page G",
    "Active User": 3490,
  },
];

export default function Chart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers({}));
  }, [dispatch])

  const users = useSelector((state) => state.users.allUser);
  //createdAt
  console.log("Userat ", users);

  return (
    <div className="m-5 p-5 dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      {/* chart tiele */}
      <h3 className="mb-5 dark:text-gray-300">User analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="Active User" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
