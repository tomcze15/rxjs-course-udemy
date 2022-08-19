import './App.css';
import { name$, storeDataOnServer, storeDataOnServerError } from './external';

function App() {
  // name$.subscribe((value) => console.log(value));
  // storeDataOnServer('Some value').subscribe((value) => console.log(value));
  storeDataOnServerError('Some Value').subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log('Error when saving: ', err.message),
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
