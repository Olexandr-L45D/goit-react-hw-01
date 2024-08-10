
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"


export default function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(item => {
                return (
                    <li className={css.item} key={item.id}>
                        <FriendListItem friend={item} />
                    </li>);
            })}
        </ul>
    );
}

