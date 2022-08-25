import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {useEffect, useState} from 'react';

const list = [
  'url(/pictures/cats.jpg)',
  'url(/pictures/dogs.jpg)',
  'url(/pictures/dyno.jpg)',
  'url(/pictures/planets.jpg)',
  'url(/pictures/chubaka.jpg)',
];
// console.log(list);

function App() {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    list.sort(() => Math.random() - 0.5);

    if (color === 'green') {
      setColor('red');
    } else {
      setColor('green');
    }

    const listBlocks = document.querySelectorAll('.App-background');
    listBlocks.forEach((item, idx) => {
      item.style = 'background-image:' + list[idx];
    });
  };

  useEffect(() => {
    setInterval(() => {
      handleClick();
    }, 1000);
  });
  return (
    <div className='App-wrapper'>
      <Header />
      <main className='App-main'>
        <div className='App-content'>
          <div
            className='left-side background'
            style={{
              backgroundImage: 'url(/pictures/planets.jpg)',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Left side
          </div>
          <div
            className='main-side App-background'
            style={{
              backgroundImage: 'url(/pictures/cats.jpg)',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <button
              style={{backgroundColor: color}}
              className='App-btn'
              onClick={handleClick}
              data-testid='btn'
            >
              Click me
            </button>
          </div>

          <div
            className='right-side App-background'
            style={{
              backgroundImage: 'url(/pictures/dogs.jpg)',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Right side
          </div>
        </div>
        <div className='App-background'></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
