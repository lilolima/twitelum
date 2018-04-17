import { createStore } from 'redux'

//funcao redutora
function tweetsReducer(estadoInicial = [], action = {}) {
    console.log(action)
    if(action.type === 'CARREGA_TWEETS') {
        const novoEstado = action.tweets
        return novoEstado
    }
    return estadoInicial
}

const store = createStore(tweetsReducer)

export default store
