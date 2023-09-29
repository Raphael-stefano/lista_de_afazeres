import styles from '../styles/tarefa.module.css'
import { useState } from "react"

export default function Tarefa(props){
    let [check, setCheck] = useState(styles.unchecked)
    let [riscado, setRiscado] = useState(styles.texto)
    function checar(){
        if(check == styles.unchecked){
            setCheck(styles.checked)
        } else{
            setCheck(styles.unchecked)
        }
        if(riscado == styles.texto){
            setRiscado(styles.textoRiscado)
        } else{
            setRiscado(styles.texto)
        }
    }
    let [existe, naoExisteMais] = useState('flex') 
    function deletar(){
        naoExisteMais('none')
    }
    let [texto, setTexto] = useState(props.tarefa)
    let [tarefa, setTarefa] = useState(texto)
    let [tarefaEstado, setTarefaEstado] = useState(true)
    function editar(){
        if(tarefaEstado){
            setTarefa(<input type='text' value={texto} onChange={e => setTexto(e.target.value)} className={styles.editando}/>)
            setTarefaEstado(false)
        } else{
            setTarefa(texto)
            setTarefaEstado(true)
        }
    }
    return(
        <div style={{display: existe}} className={styles.tarefa}>
            <div onClick={checar} className={styles.checar}>
                <div className={check}></div>
                <div className={riscado}>{tarefa}</div>
            </div>
            <div className={styles.simbolos}>
                <div onClick={editar} className={styles.gg_pen}></div>
                <div className={styles.divisor}></div>
                <div onClick={deletar} className={styles.gg_trash}></div>
            </div>
        </div>
    )
}