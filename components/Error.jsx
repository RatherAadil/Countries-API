import React from "react";
import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  return (
    <>
      <h2>Something went wrong : {error.status}</h2>
    </>
  );
}

export default Error;
