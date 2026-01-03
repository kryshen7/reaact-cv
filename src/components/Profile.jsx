function Profile({ name, title, avatar }) {
    return (
        <header className="top">
            <img src={avatar} alt="Profil" className="avatar" />
            <h1>{name}</h1>
            <span className="title">{title}</span>
        </header>
    );
}

export default Profile;
