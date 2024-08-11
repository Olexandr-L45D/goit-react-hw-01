import css from "./FriendListItem.module.css"

export default function FriendListItem({
    friend: { avatar, name, isOnline }
}) {
    const paragraphClsc = [css.friendStatus];
    if (isOnline) {
        paragraphClsc.push(css.isOnline);
    } else {
        paragraphClsc.push(css.isOffline);
    }

    return (
        <div className={css.item}>
            <div className={paragraphClsc.join(" ")}>
                <img className={css.images} src={avatar} alt="Avatar" width="48" />
                <p className={css.friendName}>{name}</p>
                <p className={css.friendStatus}>
                    {isOnline ? "Online" : "Offline"}</p>
            </div>
        </div>
    );
}