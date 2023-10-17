import Billing from "./components/billing";
import Profile from "./components/profile";

const App = () => {
  return (
    <>
      <div className="background-rectangle" />
      <div className="main">
        <Profile />
        <Billing />
      </div>
    </>
  );
};

export default App;
