import React from "react";

export default function WidgetLg() {
  return (
    <div className="flex-auto w-8/12 p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold">Latest Events</h3>

      <table className="w-full border-spacing-48">
        <tr>
          <th className="text-left">Event Name</th>
          <th className="text-left">Event Organizator</th>
          <th className="text-left">Event Tags</th>
          <th className="text-left">Event Address</th>
          <th className="text-left">Event Description</th>
          <th className="text-left">Event Image</th>
        </tr>

        <tr>
          <td className="font-light">Sunnyhill</td>
          <td className="font-light">Organizator</td>
          <td className="font-light">Tags</td>
          <td className="font-light">Address</td>
          <td className="font-light">Description</td>
          <td className="flex items-center">
            <img
              className="w-10 rounded-full object-cover mr-2"
              src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
              alt="user"
            />
            <span>User</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
