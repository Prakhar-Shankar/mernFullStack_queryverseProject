import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='dispaly-votes-ans'>
            <p>{question.upVote.length - question.downVote.length}</p>
            <p>votes</p>
        </div> 
        <div className='dispaly-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>Answers</p>
        </div> 
        <div className="display-question-details">
            <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>

                    {/* Basically yaha ham ek kaam kar rhe question kis tag mein belong karta wo update kar rahe */}

                    {
                        question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </div>

                {/* yaha question kab or kisne pucha wo update kar rhe we are using curly brackets because wo ek js ka part hai */}

                    <p className='display-time'>
                        asked {moment(question.askedOn).fromNow()} {question.userPosted}    
                     </p>
            </div>
        </div>   
        
        </div>
  )
}

export default Questions
