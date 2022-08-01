import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Back home</Link>
    </div>
  );
}
export default Error;
