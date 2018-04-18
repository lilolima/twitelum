import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//funcao redutora
function tweetsReducer(state = [], action = {}) {
    console.log(action)
    if (action.type === 'CARREGA_TWEETS') {
        const novoEstado = action.tweets
        return novoEstado
    }

    if (action.type === 'ADICIONA_TWEET') {
        console.warn('Acao que ta acontecendo agora:', action.type, state)
        const novoEstado = [action.tweet, ...state]
        return novoEstado
    }

    if (action.type === 'REMOVE_TWEET') {
        console.warn('Acao que ta acontecendo agora REMOVE:', action.type, state)
        const novoEstado = state.filter((tweetAtual) => tweetAtual._id !== action.idDoTweet)
        return novoEstado
    }

    return state
}

const store = createStore(
    tweetsReducer,
    applyMiddleware(
        thunk
    )
)

export default store
