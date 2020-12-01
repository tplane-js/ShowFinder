import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const ShowDetails = (props) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Show details for show id {id}</h1>
    </div>
  );
};

export default ShowDetails;
