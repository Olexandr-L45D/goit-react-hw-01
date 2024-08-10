import css from "./Profile.module.css"

export default function Profile({
    uzerS: { username, tag, location, avatar, stats: { followers, views, likes } } },
) {
    return (

        <div className={css.container}>
            <div className={css.imgBloc}>
                <img className={css.imgWrapper}

                    src={avatar} alt={username} width="280"

                />

                <p className={css.title}>
                    {username}    </p>

                <p>@ {tag} </p>
                <h2> {location} </h2>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.itemText}>Followers</span>
                    <span className={css.itemTextdata}> <b>{followers}</b> </span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Views</span>
                    <span className={css.itemTextdata}><b>{views}</b></span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Likes</span>
                    <span className={css.itemTextdata} ><b>{likes}</b></span>
                </li >
            </ul>
        </div>
    );
}


// Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//     }).isRequired,
// };