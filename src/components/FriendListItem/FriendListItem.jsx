import css from "./FriendListItem.module.css"

export default function FriendListItem({
    friend: { avatar, name, isOnline, active }
}) {
    const containerClsc = [css.container];
    if (active) {
        containerClsc.push(css.isActive);
    } else {
        containerClsc.push(css.isRetared);
    }

    return (
        <div className={containerClsc.join(" ")}>
            <img className={css.images} src={avatar} alt="Avatar" width="48" />
            <p><b>{name}</b></p>
            <p>Friend status: {isOnline}</p>
            {active && <p>Online: {isOnline}</p>}
            <p>Status: {active ? "active" : "retired"}</p>
        </div>
    );
}