import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

//funcao redutora
function tweetsReducer(state = { lista: [], tweetAtivo: {} }, action = {}) {
    console.log(action)
    if (action.type === 'CARREGA_TWEETS') {
        const novoEstado = {
            ...state,
            lista: action.tweets
        }
        return novoEstado
    }

    if (action.type === 'ADICIONA_TWEET') {
        console.warn('Acao que ta acontecendo agora:', action.type, state)
        const novoEstado = {
            ...state,
            lista: [action.tweet, ...state.lista]
        }
        return novoEstado
    }

    if (action.type === 'REMOVE_TWEET') {
        console.warn('Acao que ta acontecendo agora REMOVE:', action.type, state)
        const listaDeTweets = state.lista.filter((tweetAtual) => tweetAtual._id !== action.idDoTweet)
        const novoEstado = {
            ...state,
            lista: listaDeTweets
        }
        return novoEstado
    }

    if (action.type === 'ADD_TWEET_ATIVO') {
        const tweetAtivo = state.lista
            .find((tweetAtual) => tweetAtual._id === action.idDoTweetQueVaiNoModal)

        const novoEstado = {
            ...state,
            tweetAtivo: tweetAtivo
        }
        return novoEstado
    }

    if (action.type === 'REMOVE_TWEET_ATIVO') {
        return {
            ...state,
            tweetAtivo: {}
        }
    }

    if (action.type === 'LIKE') {
        const tweetsAtualizados = state.lista.map((tweetAtual) => {
            if (tweetAtual._id === action.idDoTweet) {
                const { likeado, totalLikes } = tweetAtual
                tweetAtual.likeado = !likeado
                tweetAtual.totalLikes = likeado ? totalLikes - 1 : totalLikes + 1
            }
            return tweetAtual
        })


        return {
            ...state,
            lista: tweetsAtualizados
        }
    }

    return state
}

function notificacoesReducer(state = '', action = {}) {
    if (action.type === 'ADD_NOTIFICACAO') {
        const novoEstado = action.msg
        return novoEstado
    }

    if (action.type === 'REMOVE_NOTIFICACAO') {
        const novoEstado = ''
        return novoEstado
    }
    return state
}

const store = createStore(
    combineReducers({
        tweets: tweetsReducer,
        notificacao: notificacoesReducer
    }),
    applyMiddleware(
        thunk
    )
)

console.warn("Esse é o primeiro estado")

export default store
