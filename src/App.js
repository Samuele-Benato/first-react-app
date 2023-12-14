import AppComponent from "./components/AppComponent";
import AppCard from "./components/AppCard";
import cards from "./cards";

function App() {
  return (
    <div className="App container">
     <AppComponent/>
     {cards.map((card) => {
      const {id} = card
      return <AppCard key={id} {...card}/>
     })}
    </div>
  );
}

export default App;
