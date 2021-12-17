import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Route path="/welcome/guest-user">
        <p>Welcome New User</p>
      </Route>
    </section>
  );
};

export default Welcome;
