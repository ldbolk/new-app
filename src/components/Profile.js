const Profile = (props) => {

    const name = `${ props.person.firstname } ${ props.person.lastname }`

    return(
        <div>
          <h2>Profile</h2>
          <h3>{ name }</h3>
        </div>
      )
}

export default Profile;