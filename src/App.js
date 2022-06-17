import './App.css';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import TasksContextProvider from './context/TasksContext';

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <TasksContextProvider>
          <Tasks />
        </TasksContextProvider>
      </section>
    </>
  );
}

export default App;
