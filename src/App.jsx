import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";

//color background-color gray-100 azul indigo-300 violet-300
function App(){
  const [tasks] = useState([
  {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programção para se tornar um desenvolvedor Full Stack.",
    isComplete: false,
  },
  {
    id: 2,
    title: "Estudar Matemática",
    description: "Estudar equações e inequações",
    isComplete: false,
  },
]);
  return (
    <div className="w-screen h-screen bg-violet-300 flex justify-center p-6">
      <div className="w-[500px]">
      <h1 className="text-3xl text text-slate-100 font-bold text-center">Planejamento de Estudos</h1>
      <AddTask/>
      <Tasks tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;
