
import css from './App.module.css'
import Profile from "../Profile/Profile"
import proFile from "../UzerBacand/proFile.json"
import FriendList from "../FriendList/FriendList"
import friends from "../UzerBacand/friends.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../UzerBacand/transactions.json"


export default function App() {

  return (


    <div className={css.container}>
      <>

        <Profile uzerS={proFile} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />

      </>
    </div>
  )
}


