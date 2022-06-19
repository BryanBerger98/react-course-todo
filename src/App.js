import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Api from './components/Api/Api';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import TasksContextProvider from './context/TasksContext';

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <TasksContextProvider>
         
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="about" element={<About />} />
            <Route path='api' element={<Api />} />
          </Routes>
        </TasksContextProvider>
      </section>
    </>
  );
}

export default App;
