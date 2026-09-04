import User from "./components/Profile";
import data from "./data/data";

function App() {
 
  return (
    <div className=" p-8 rounded-lg shadow-md mx-auto max-w-md bg-white">
    <h1 className="text-2xl font-bold">Room</h1>
    <p className="text-gray-400">5 people are around right now</p>
    <ul className="flex flex-col space-y-4 mt-4">
      {data.map((user) => (
        <li key={user.id}>
          <User name={user.name} Work={user.work} avatar={user.avatar} connected={user.connected} />
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App