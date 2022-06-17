import './App.css';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <Tasks />
      </section>
    </>
  );
}

export default App;
