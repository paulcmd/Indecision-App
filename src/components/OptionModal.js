import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option" //accessibility option
        onRequestClose={props.handleDeleteModalOption} //removes modal when press escape or click outside modal
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleDeleteModalOption}>Okay</button>
    </Modal>
)

//!!'test' => true
//!!undefined => false
//!! converts anything to boolean

export default OptionModal
