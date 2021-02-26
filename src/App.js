import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import users from "./db/user.json";

console.log(users);

const { name, tag, location, avatar, stats } = users;

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList />
      <Statistics />
      <TransactionHistory />
    </div>
  );
}

export default App;
