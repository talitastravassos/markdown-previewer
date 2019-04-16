import React from 'react'
import marked from 'marked';

const MarkdownPreview = (props) => {

    const createMarkDown = () => {

        return { __html: marked(props.markDown) }
    }

    return (
        <div className="preview" dangerouslySetInnerHTML={createMarkDown()}>
        
        </div>
    )
}

export default MarkdownPreview
