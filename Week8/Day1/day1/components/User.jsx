const User = (props) => {
    console.log(props);
    const {id, name, email, username, phone } = props.userinfo;
    return (
        <div>
            <img style={{ marginBottom: -35 }} src={`https://robohash.org/${id}?size=150x150`}/>
            <h4 style={{ marginTop: 35 }}>{name}</h4>
            <h4 style={{ marginTop: -20 }}>{email}</h4>
            <p style={{ marginTop: -25 }}>@{username}</p>
            <p style={{ marginTop: -20 }}>{phone}</p>
        </div>
    );
}

export default User;