import { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import { Box, Button, Select, Input, Text } from 'theme-ui';
import theme from './styles/theme'; // Import your theme
import './App.css';

import GlobalStyles from './styles/globalStyles'; // Import the GlobalStyles component
// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, captured: false },
//   { id: 2, description: 'Socks', quantity: 12, captured: false },
//   { id: 3, description: 'Socks', quantity: 12, captured: true },
// ];

export default function App() {
  const [photos, setPhotos] = useState([]);

  function handleAddPhotos(photo) {
    setPhotos((photos) => [...photos, photo]);
  }
  // 82
  function handleDeletePhoto(id) {
    setPhotos((photos) => photos.filter((photo) => photo.id !== id));
  }

  function handleTogglePhoto(id) {
    setPhotos((photos) =>
      photos.map((photo) =>
        photo.id === id ? { ...photo, captured: !photo.captured } : photo
      )
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='app'>
          <GlobalStyles />
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              display: 'grid',
              gridTemplateRows: 'auto auto 1fr auto',
              // paddingBottom: '5rem',
              /* Add more styles as needed */
            }}
          >
            <h1>📸 Photo List</h1>
            <Form onAddPhotos={handleAddPhotos} />
            <PhotoList
              photos={photos}
              onDeletePhoto={handleDeletePhoto}
              onTogglePhoto={handleTogglePhoto}
            />
            <Stats photos={photos} />
          </Box>

          {/* <Logo /> */}

          {/* <Form onAddPhotos={handleAddPhotos} /> */}
          {/* <PhotoList
            photos={photos}
            onDeletePhoto={handleDeletePhoto}
            onTogglePhoto={handleTogglePhoto}
          /> */}
          {/* <Stats photos={photos} /> */}
        </div>
      </ThemeProvider>
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
      <Button sx={{ variant: 'buttons.primary' }}>Button</Button>
    </form>
  );
}

function PhotoList({ photos, onDeletePhoto, onTogglePhoto }) {
  return (
    <div className='list'>
      <ul>
        {photos.map((photo) => (
          <Photo
            photo={photo}
            key={photo.id}
            onDeletePhoto={onDeletePhoto}
            onTogglePhoto={onTogglePhoto}
          />
        ))}
      </ul>
    </div>
  );
}

function Photo({ photo, onDeletePhoto, onTogglePhoto }) {
  return (
    <li>
      <input
        type='checkbox'
        value={photo.captured}
        onChange={() => onTogglePhoto(photo.id)}
      />
      <span style={photo.captured ? { textDecoration: 'line-through' } : {}}>
        {photo.quantity} {photo.description}
      </span>
      <button onClick={() => onDeletePhoto(photo.id)}>❌</button>
    </li>
  );
}

function Stats({ photos }) {
  if (!photos.length)
    return (
      <>
        {/* <Heading>Heading 1</Heading> */}
        <Text as='h1' variant='heading1'>
          Heading 1
        </Text>
        <p className='stats'>
          <em>Start adding some photos to your list</em>
        </p>
      </>
    );
  // Calculating 85
  const numPhotos = photos.length;
  const numCaptured = photos.filter((photo) => photo.captured).length;
  const percentage = Math.round((numCaptured / numPhotos) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything photographed 📸'
          : `You have ${numPhotos} items on your list, 
          and you we already captured
        ${numCaptured} 
        (${percentage}%) `}
      </em>
    </footer>
  );
}
