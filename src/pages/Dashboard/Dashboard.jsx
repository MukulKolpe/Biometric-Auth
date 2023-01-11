import { useCurrentUser } from "../../hooks/userCurrentUser";
import "./Dashboard.module.css";

function Dashboard() {
  const { isLoading, isAuthorized, username } = useCurrentUser();

  if (isLoading) {
    return null;
  }
  const authorizedBody = (
    <>
      You successfully signed in with Passage.
      <br />
      <br />
      Your email is: <b>{username}</b>
    </>
  );

  const unauthorizedBody = (
    <>
      You have not logged in and cannot view the dashboard.
      <br />
      <br />
      <a href="/" className="link">
        Login to continue.
      </a>
    </>
  );

  return (
    <div className="dashboard">
      <div className="title">{isAuthorized ? "Welcome!" : "Unauthorized"}</div>
      <div className="message">
        {isAuthorized ? authorizedBody : unauthorizedBody}
      </div>
    </div>
  );
}

export default Dashboard;
