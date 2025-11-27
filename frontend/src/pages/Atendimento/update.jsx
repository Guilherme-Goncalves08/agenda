import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { updateAtendimento } from "../../api/atendimentos";


export default function UpdateUser() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    // adicionar userLocation novo para pegar o state(usuario) passado anteriormente
    const location = useLocation()
    const { atendimento: prevAtendimento } = location.state


    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setUser({ ...prevAtendimento, senha: '' })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateAtendimento(prevAtendimento.id, atendimento)

        if (response.status === 200) {
            navigate('/Atendimentos')
            console.log("Atendimento alterado com sucesso")
        } else {
            console.log("Erro ao alterar o Atendimento")
            console.log(response)
        }

    }

    return (
        <main>
            <form>
                <div>
                    <label>Dia:</label>
                    <input type="number" name="dia" id="dia" value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>Hora:</label>
                    <input type="time" name="hora" id="hora" value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>Valor:</label>
                    <input type="number" name="valor" id="valor" value={atendimento.valor} onChange={handleChange} />
                </div>
                <div>
                    <label>Concluido:</label>
                    <select
                        name="concluido"
                        value={atendimento.concluido ? "true" : "false"}
                        onChange={(e) =>
                            setAtendimento({ ...atendimento, concluido: e.target.value === "true" })
                        }
                    >
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </div>
                <button 
                    type="reset"
                    onClick={handleReset}
                >Limpar</button>
                <button
                    type="submit"
                    onClick={handleSave}
                >Enviar</button>
            </form>
        </main>
    )
}