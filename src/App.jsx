import Profile from "./components/Profile";

function User({age, name}) {
  return (
    <div className="bg-amber-900 text-white p-4 m-4 rounded-lg">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    </div>
  );
}


function App() {
 
  return (
    <>
    <User name="Dale Houston" age={30} />
    <User name="Madge Murphy" age={25} />
    <User name="Margaret Garner" age={28} />
  </>
  );
}

export default App