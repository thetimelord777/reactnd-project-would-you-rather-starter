import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addQuestion } from '../Actions/questions'
import { ROUTE_HOME } from '../Utils/routes'

class NewQuestion extends Component {

  state = {
    text1: '',
    text2: '',
    toHome: false,
  }

  handleChange1 = (e) => {
    const text1 = e.target.value

    this.setState(() => ({
      text1
    }))
  }

  handleChange2 = (e) => {
    const text2 = e.target.value

    this.setState(() => ({
      text2
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text1,text2 } = this.state

    let question ={
        optionOneText: text1,
        optionTwoText: text2,
        author: this.props.currentUser.id
    }

    this.props.dispatch(addQuestion(question))

    this.setState(() => ({
      text1: '',
      text2: '',
      toHome: true,
    }))
  }

  render() {

    if(this.props.currentUser === null){
            alert('you have to be logged in to enter here.')
            return (<Redirect to={ROUTE_HOME} />)
        }

    const { text1,text2, toHome } = this.state

    if (toHome === true) {
      return <Redirect to={ROUTE_HOME} />
    }

    const tweet1Left = 80 - text1.length
    const tweet2Left = 80 - text2.length

    return (
      <div className='App-header'>
        <h3 >Want to add a new question?</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          
          <div>
              <textarea
            placeholder="Option One"
            value={text1}
            onChange={this.handleChange1}
            className='textarea'
            maxLength={280}
          />
          {tweet1Left <= 30 && (
            <div className='tweet-length'>
              {tweet1Left}
            </div>
          )}

          <textarea
            placeholder="Option Two"
            value={text2}
            onChange={this.handleChange2}
            className='textarea'
            maxLength={280}
          />
          {tweet2Left <= 30 && (
            <div className='tweet-length'>
              {tweet2Left}
            </div>
          )}
          </div>

          <button
            className='btn'
            type='submit'
            disabled={((text1 === '') || (text2=== ''))}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({currentUser}) {
  return {
      currentUser
  }
}

export default connect(mapStateToProps)(NewQuestion)