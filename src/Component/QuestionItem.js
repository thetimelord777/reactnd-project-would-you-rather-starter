import {Component} from 'react'

class QuestionItem extends Component{

    render() {
        let author = this.props.author
        let question = this.props.question.optionOne.text
        return(
        <li className="Question-list-item">
                <h2>{author.name} Asks</h2>
                <div className="Question-item">
                    <img className= 'Author-img' src={author.avatarURL} alt='sorry'></img>    
                    <div>
                        <h3>Would You Rather</h3>
                        <p>...{question.substring(0,20)}...</p>
                        <button>View poll</button>
                    </div>
                </div>
        </li>)
        }
}




export default QuestionItem