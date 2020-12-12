import React from 'react'

const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions} //true if there are options, flip to disable
        >
            What should I do?
        </button>
    </div>
)

export default Action
