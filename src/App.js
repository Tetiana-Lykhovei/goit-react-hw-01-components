import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";

import users from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

console.log(statisticalData);

const { name, tag, location, avatar, stats } = users;

function App() {
  return (
    <div className="App">
      <h1>Hello, it's me</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Statistics" stats={statisticalData} />
      <h1>My Friends</h1>
      <FriendList people={friends} />
      <h1>My Money</h1>
      <TransactionHistory trans={transactions} />
    </div>
  );
}

export default App;
