import React from 'react'

const widgetTags = () => {

    const tags = ['c', 'css', 'express', 'firebase', 'html', 'mongodb', 'node.js', 'javascript', 'reactjs', 'next.js','mern', 'mysql','java', 'python','php' ]

  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {
            tags.map((tag) => (
                <p key={tag}>{tag}</p>
            ))
}
        </div>
    </div>
  )
}

export default widgetTags

