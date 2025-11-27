import { useEffect, useState } from 'react'
import { deleteAtendimento, getAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'

function Atendimentos() {
    const navigate = useNavigate()
    const [conteudo, setConteudo] = useState([])

    const handleUpdate = async (atendimento) => {
        navigate('/update/atendimento', { state: { atendimento } })
    }

    const handleDelete = async (id) => {
        const response = await deleteAtendimento(id)

        if (response.status != 204) {
            console.log("Erro ao deletar!!!")
            return
        }

        setConteudo(atendimentos => atendimentos.filter(atendimento => atendimento.id != id))
    }

    useEffect(() => {
        async function Carregar() {
            const todosAtendimentos = await getAtendimentos();
            setConteudo(todosAtendimentos);
        }
        Carregar();
    }, [])

    return (
        <main>
            <Link to={'/create/atendimento'}>
                <button>Criar</button>
            </Link>
            {
                conteudo.length == 0
                    ? <div>
                        <label>Nenhum atendimento cadastrado no seu nome (Ou não está logado)</label>
                    </div>
                    : conteudo.map(atendimentos =>
                        <div className='card char' key={atendimentos.id}>
                            <h2>Atendimento Nº: {atendimentos.id}</h2>
                            <h2>Dia: {atendimentos.dia}</h2>
                            <h2>Hora: {atendimentos.hora}</h2>
                            <h2>Valor: {atendimentos.valor}</h2>
                            <h2>Concluido: {atendimentos.concluido ? 'Sim' : 'Nao'}</h2>
                            <div className='actions'>
                                <button
                                    type='button'
                                    onClick={() => handleUpdate(atendimentos)}
                                >Alterar</button>

                                <button
                                    type='button'
                                    onClick={() => handleDelete(atendimentos.id)}
                                >Deletar</button>
                            </div>
                        </div>)
            }
        </main>
    )
}

export default Atendimentos