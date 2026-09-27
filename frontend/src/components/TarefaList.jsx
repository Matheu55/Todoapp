const TarefaList = ({ tarefas, updateTarefa, deletarTarefa }) => {
    return (
        <div className="mt-10">
            {tarefas.map((t) => {
                return (
                    <div key={t.id} className="flex items-center">
                        <div className="flex items-center border p-3 mt-5">
                            <div>{t.content}</div>
                            <div className={`ml-3 border p-3 ${t.isComplete ? "text-green-500" : "text-red-500"}`}>
                                {t.isComplete ? "completada" : "em andamento"}
                            </div>
                        </div>
                        <button
                            onClick={() => updateTarefa(t.id)}
                            className="border cursor-pointer h-fit ml-5 p-3"
                        >
                            Finalizar
                        </button>
                        <button
                            onClick={() => deletarTarefa(t.id)}
                            className="border cursor-pointer h-fit ml-5 p-3"
                        >
                            Deletar
                        </button>
                    </div>

                )
            })}
        </div>
    )
};

export default TarefaList;  