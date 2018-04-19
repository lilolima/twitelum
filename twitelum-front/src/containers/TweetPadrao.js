import Tweet from '../components/Tweet'
import { connect } from 'react-redux'
import * as TweetsAPI from '../apis/TweetAPI'


// Mapeia as funções para as propriedades no Presentation Component
const mapDispatchToProps = (dispatch, propsRecebidas) => {
    return {
        removeHandler: () => {
            dispatch(TweetsAPI.remove(propsRecebidas.tweetInfo._id))
        },
        handleLike: () => {
            dispatch(TweetsAPI.like(propsRecebidas.tweetInfo._id))
        }
    }
}

const TweetPadraoContainer = connect(null, mapDispatchToProps)(Tweet)

export default TweetPadraoContainer