const Users =(props) => {
    const {name , age , hairColor} = props;
    return (
        <div className="users">
            <div className="name-b">
            <label htmlFor="name"></label>
            <p id="name">{name}</p>
            </div>

            <div className="age-b">
            <label htmlFor="age">Age</label>
            <p id="age">{age}</p>
            </div>

            <div className="hairColor-b">
            <label htmlFor="hairColor">Hair color</label>
            <p id="hairColor">{hairColor}</p>
            </div>
        </div>
    )
}

export default Users;