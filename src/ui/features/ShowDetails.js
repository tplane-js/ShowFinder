import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const ShowDetails = ({ isLoading, users, getUsers }) => {
  useEffect(() => {
    if (users.length === 0 && !isLoading) getUsers();
  }, [users, getUsers]);

  const { id } = useParams();
  const user = users?.[id];

  //debugger;

  return (
    <div>
      <h1>Bookmarkable Details Page</h1>
      {!isLoading && (
        <>
          <div className="simple-row">
            <span>{user?.name}</span>
            <span>{user?.username}</span>
            <span>{user?.email}</span>
            <span>{user?.address.city}</span>
            <span>{user?.address.zipcode}</span>
          </div>
        </>
      )}
      {isLoading && (
        <>
          <h1>LOADING...</h1>
        </>
      )}
    </div>
  );
};

export default ShowDetails;
