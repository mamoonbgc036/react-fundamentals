type Count = {
    count: number
}
export default function Parent({ count }: Count) {
    return (
        <p>{count}</p>
    )
}