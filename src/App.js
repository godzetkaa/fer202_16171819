import { useState } from 'react';
import './App.css';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <section className="demo-card">
      <h2>Event Handling Demo</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={handleButtonClick}>
        Increase Count
      </button>
    </section>
  );
};

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section className="demo-card">
      <h2>Render and Commit Demo</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </section>
  );
};

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <section className="demo-card">
      <h2>State as a Snapshot Demo</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleSnapshot}>
        Take Snapshot
      </button>
      <button type="button" onClick={handleRestore} disabled={snapshot === null}>
        Restore Snapshot
      </button>
    </section>
  );
};

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>React Exercises</h1>
        <p>Event handling, render and commit, and state snapshots.</p>
      </header>
      <div className="demo-grid">
        <EventHandlingDemo />
        <RenderAndCommitDemo />
        <SnapshotDemo />
      </div>
    </main>
  );
}

export default App;
