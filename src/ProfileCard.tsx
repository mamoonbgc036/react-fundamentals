type ProfilePros = {
    name: string,
    role: string,
    age: number,
}

function ProfileCard(profile: ProfilePros) {
    return (
        <div>
            {profile.name} - {profile.role} - {profile.age}
        </div>
    )
}

export default ProfileCard;