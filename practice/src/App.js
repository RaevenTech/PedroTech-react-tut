import "./App.css";
import ToDo from "./components/CRUD/ToDo";
import Jobs from "./components/Jobs";
import Planets from "./components/Planets";
import State from "./components/State";

function App() {
    return (
        <div className="App">
            {/*----------------------- using simple props  ----------------------------------------- */}
            <div>Using Props(properties)</div>{" "}
            <Jobs salary={4400} position="FE" company="Microsoft" />
            <Jobs salary={2500} position="BE" company="Apple" />
            <Jobs salary={3000} position="FS" company="Google" />
            <hr />
            {/*----------------------- using simple props  ----------------------------------------- */}
            <Planets />
            <hr />
            {/*----------------------- using simple props  ----------------------------------------- */}
            <State />
            <hr />
            {/*----------------------- using simple props  ----------------------------------------- */}
            <ToDo />
            <hr />
            {/*----------------------- using simple props  ----------------------------------------- */}
        </div>
    );
}

export default App;
