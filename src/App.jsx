import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, captured: false },
  { id: 2, description: 'Socks', quantity: 12, captured: false },
  { id: 3, description: 'Socks', quantity: 12, captured: true },
];

export default function App() {
  const [photos, setPhotos] = useState([]);

  function handleAddPhotos(photo) {
    setPhotos((photos) => [...photos, photo]);
  }
  // 82
  function handleDeletePhoto(id) {
    setPhotos((photos) => photos.filter((photo) => photo.id !== id));
  }
  return (
    <>
      <div className='app'>
        <Logo />
        <Form onAddPhotos={handleAddPhotos} />
        <PhotoList photos={photos} onDeletePhoto={handleDeletePhoto} />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <h1>📸 Photo List</h1>;
}

function Form({ onAddPhotos }) {
  // Controlled Elements 73
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Guard
    if (!description) return;

    const newPhoto = { description, quantity, captured: false, id: Date.now() };
    console.log(newPhoto);

    onAddPhotos(newPhoto);

    // Once submitted reset to default
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 💍 wedding day?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Photo of...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PhotoList({ photos, onDeletePhoto }) {
  return (
    <div className='list'>
      <ul>
        {photos.map((photo) => (
          <Photo photo={photo} key={photo.id} onDeletePhoto={onDeletePhoto} />
        ))}
      </ul>
    </div>
  );
}

function Photo({ photo, onDeletePhoto }) {
  return (
    <li>
      <span style={photo.captured ? { textDecoration: 'line-through' } : {}}>
        {photo.quantity} {photo.description}
      </span>
      <button onClick={() => onDeletePhoto(photo.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>You have X items on your list, and you we already captured X (X%)</em>
    </footer>
  );
}
