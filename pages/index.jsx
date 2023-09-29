import Tarefa from "@/components/tarefa"
import { useState } from "react"

export default function Home(){
    const [gerador, setGerador] = useState('') 
    const [lista, setLista] = useState([<Tarefa tarefa='Iniciar a lista de tarefas'/>])
    function AdicionarTarefa(){
        let novaLista = [...lista, <Tarefa tarefa={gerador}/>]
        setLista(novaLista)
        setGerador('')
        return lista
    }
    return(
      <div className="home">
          <header>
              <h1>Lista de Tarefas</h1>
              <div>
                  <input placeholder="Inicie uma tarefa" value={gerador} onChange={e => setGerador(e.target.value)}/>
                  <button onClick={AdicionarTarefa}>Adicionar</button>
              </div>
          </header>
          {lista}
      </div>
    )
}