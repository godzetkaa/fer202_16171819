import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const animals = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
    },
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra',
    },
  },
];

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

const showAdditionalData = (additional) => {
  const data = Object.entries(additional);
  const formattedData = data.map(([key, value]) => `${key}: ${value}`).join('\n');
  window.alert(formattedData);
};

const AnimalCard = ({
  name,
  scientificName,
  size,
  diet,
  additional = { notes: 'No Additional Information' },
  showAdditional,
}) => (
  <article className="animal-card">
    <h3>{name}</h3>
    <p><strong>Scientific name:</strong> {scientificName}</p>
    <p><strong>Size:</strong> {size}</p>
    <p><strong>Diet:</strong> {diet.join(', ')}</p>
    <button type="button" onClick={() => showAdditional(additional)}>
      More Info
    </button>
  </article>
);

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>React Exercises</h1>
        <p>Event handling, render and commit, state snapshots, and PropTypes.</p>
      </header>
      <div className="demo-grid">
        <EventHandlingDemo />
        <RenderAndCommitDemo />
        <SnapshotDemo />
      </div>

      <section className="prop-types-demo">
        <h2>PropTypes Demo</h2>
        <div className="animal-grid">
          {animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              {...animal}
              showAdditional={showAdditionalData}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
