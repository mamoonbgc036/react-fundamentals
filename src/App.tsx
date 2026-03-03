import UserCard from './UserCard';


function App() {
  return (
    <div>
      <UserCard name="mamoon" email="test@test.com" role="admin" />
      <UserCard name="noman" email="test@test.com" role="admin" avatar="https://avartar.png" />
    </div>
  )
}

export default App;