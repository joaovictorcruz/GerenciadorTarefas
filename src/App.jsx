import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center p-6">
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Tasks/>
      <AddTask/>
    </div>
  );
}

export default App;
