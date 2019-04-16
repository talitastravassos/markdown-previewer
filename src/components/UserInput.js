import React, { useState } from 'react'
import MarkdownPreview from './MarkdownPreview';

const initialState = '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")'

const UserInput = (props) => {

    const [md, setMd] = useState(initialState);

    const updateMd = (e) => {
        setMd(e.target.value)
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h3 className="text-center">Enter the Markdown</h3>
                <textarea 
                    
                    type="text" 
                    className="md-input" 
                    value={md} 
                    onChange={updateMd} />

            </div>
            <div className="col-md-6">
                <h3 className="text-center">Preview</h3>
                <MarkdownPreview markDown={md} />
            </div>

        </div>
    )
}

export default UserInput
