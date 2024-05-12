import { Profile } from './profile/Profile';
import user from './../json/user.json';
import { Statistics } from './statistics/Statistics';
import data from './../json/data.json';
import { FriendList } from './friendlist/FriendList';
import friends from './../json/friends.json';
import { TransactionHistory } from './transaction_history/TransactionHistory';
import transactions from './../json/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
