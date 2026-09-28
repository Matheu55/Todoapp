import { useEffect, useState } from "react";

import Input from "./components/Input";

import TarefaList from "./components/TarefaList";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const getTarefas = async () => {
    try {
      const res = await fetch(
        "https://backend-phi-one-83.vercel.app/api/tarefa"
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setTarefas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarefa = async (id) => {
    try {
      const res = await fetch(
        `https://backend-phi-one-83.vercel.app/api/tarefa/${id}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      getTarefas();
    } catch (error) {
      console.error(error);
    }
  };

  const deletarTarefa = async (id) => {
    try {
      const res = await fetch(
        `https://backend-phi-one-83.vercel.app/api/tarefa/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      getTarefas();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTarefas();
  }, []);

  return (
    <div className="flex items-center w-full justify-center flex-col">
      <Input getTarefas={getTarefas} />

      <TarefaList
        tarefas={tarefas}
        updateTarefa={updateTarefa}
        deletarTarefa={deletarTarefa}
      />
    </div>
  );
}

export default App;

