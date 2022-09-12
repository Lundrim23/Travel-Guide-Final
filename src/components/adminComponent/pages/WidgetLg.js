import React from "react";

export default function WidgetLg() {
  return (
    <div className="flex-auto w-8/12 p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold">Latest Events</h3>

      <table className="w-full border-spacing-48">
        <tr>
          <th>Event</th>
          <th>Place</th>
          <th>Description</th>
          <th>Tags</th>
        </tr>
        <tr>
          <td>
            <img
              className="w-10 rounded-full object-cover"
              src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
              alt="user"
            />
            <span>User</span>
          </td>
          <td>2 jun 2021</td>
          <td>place</td>
          <td>2 jun 2021</td>
        </tr>
      </table>
    </div>
  );
}
