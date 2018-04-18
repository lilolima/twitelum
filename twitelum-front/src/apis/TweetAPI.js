export const carrega = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
            .then((respostaDoServer) => respostaDoServer.json())
            .then((tweetsDoServidor) => {
                dispatch({ type: 'CARREGA_TWEETS', tweets: tweetsDoServidor })
            })
    }

}

export const adiciona = (novoTweet) => {
    return (dispatch) => {
        if (novoTweet) {
            // Manda o texto e o TOKEN
            fetch(`http://localhost:3001/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`,
                { method: 'POST', body: JSON.stringify({ conteudo: novoTweet }) })
                .then((respostaDoServer) => {
                    return respostaDoServer.json()
                })
                .then((tweetProntoDoServer) => {
                    dispatch({ type: 'ADICIONA_TWEET', tweet: tweetProntoDoServer })
                })
        }
    }
}

export const remove = (idDoTweet) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/tweets/${idDoTweet}?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
            method: 'DELETE'
        })
            .then((respostaDoServer) => respostaDoServer.json())
            .then((respostaPronta) => {
                dispatch({ type: 'REMOVE_TWEET', idDoTweet: idDoTweet })
                /*const tweetsAtualizados = this
                    .state.tweets.filter((tweetAtual) => tweetAtual._id !== idDoTweet)
                this.setState({
                    tweets: tweetsAtualizados,
                    tweetAtivo: {}
                })*/
            })
    }
}