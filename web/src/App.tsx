import './styles/main.css';
import logoImg from './assets/nlw-logo.svg';
import GamesDisplay from './components/GamesDisplay';
import { MagnifyingGlassPlus } from 'phosphor-react';
import AdBanner from './components/AdBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <GamesDisplay />
      <AdBanner />

    </div>
  );
}

export default App
