import {Component} from 'react'

class LeaderBoardUserCard extends Component {

    render(){
        let user = this.props.user
        let rank = this.props.rank
        return(
        <div className='rankCard'>
            <h3>{user.name + ' '} {rank<=3 ? ('#' + (rank+1)) : ''}</h3>
            <div className = 'rankCardContent'>
                <img className= 'Author-img' src={user.avatarURL} alt="sorry"></img>
                <div className = 'rankCard'>
                    <p>Answered Questions: {Object.keys(user.answers).length}</p>
                    <p>Added Questions: {user.questions.length}</p>
                </div>
                <div className = 'rankCard'>
                    <h4>Total Score</h4>
                    <h1>{Object.keys(user.answers).length +user.questions.length}</h1>
                </div>
            </div>
        </div>)
    }
}

export default LeaderBoardUserCard