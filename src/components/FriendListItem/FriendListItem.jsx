import css from "./FriendListItem.module.css"

export default function FriendListItem({
    friend: { avatar, name, isOnline }
}) {
    const containerClsc = [css.container];
    if (isOnline) {
        containerClsc.push(css.isOnline);
    } else {
        containerClsc.push(css.isOffline);
    }

    return (
        <div className={containerClsc.join(" ")}>
            <img className={css.images} src={avatar} alt="Avatar" width="48" />

            <p className={css.friendName}>{name}</p>
            <p className={css.friendStatus}>

                {isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}