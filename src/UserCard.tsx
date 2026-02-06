type UserProps = {
    name: string;
    age: number;
}

function UserCard({ name, age }: UserProps) {
    return (
        <div>
            <h3>{name} is {age} year old</h3>
        </div>
    )
}

export default UserCard;