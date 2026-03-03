interface UserProps {
    name: string,
    email: string,
    role: string,
    avatar?: string
}

export default function UserCard(props: UserProps) {
    return (
        <div>
            <p>{props.name} - {props.email} - {props.role}</p>
            {props.avatar ? <img src={props.avatar} /> : <p>No avatar provided</p>}
        </div>
    )
}