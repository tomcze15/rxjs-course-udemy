import { Observable, Subscriber } from "rxjs";
import "./App.css";
import { name$, storeDataOnServer, storeDataOnServerError } from "./external";

function App() {
  const observable$ = new Observable<string>((subscriber) => {
    console.log("Observable executed");
    subscriber.next("Alice");
    subscriber.next("Ben");
    setTimeout(() => subscriber.error(new Error("Failure")), 2000);
    setTimeout(() => {
      subscriber.next("Charlie");
      subscriber.complete();
    }, 4000);
  });

  observable$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err.message),
    complete: () => console.log("Completed"),
  });

  return (
    <div className="App">
      <div className="container">
        <h2 className="my-4">Quick Start</h2>
      </div>
    </div>
  );
}

export default App;
