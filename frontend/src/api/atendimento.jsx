import api from "./api"

export const getAtendimento = async () => {
    const response = await api.get('/api/v1/clientes')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.cliente
}

export const createAtendimento = async (atendimento) => {
   const response = await api.post('/api/v1/cliente', atendimento)

   return response
}

export const updateAtendimento = async (id, data) => {
    const response = await api.put(`/api/v1/cliente/${id}`, data)

    return response
}

export const deleteAtendimento = async (id) => {
    const response = await api.delete(`/api/v1/cliente/${id}`)

    return response
}

export const loginAtendimento = async (data, hora) => {
    const response = await api
        .post('/api/v1/login', { data: data, data: hora })

   return response
}