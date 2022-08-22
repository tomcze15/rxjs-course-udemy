import { Observable, Subscriber } from "rxjs";
import "./App.css";
import { name$, storeDataOnServer, storeDataOnServerError } from "./external";

function App() {
  const observable$ = new Observable<number>((subscriber) => {
    let counter = 1;

    setInterval(() => {
      subscriber.next(counter++);
    }, 2000);
  });

  const subscribtion = observable$.subscribe((value) => console.log(value));

  setTimeout(() => {
    console.log("Unsubscribed");

    subscribtion.unsubscribe();
  }, 7000);

  return (
    <div className="App">
      <div className="container">
        <h2 className="my-4">Quick Start</h2>
      </div>
    </div>
  );
}

export default App;
