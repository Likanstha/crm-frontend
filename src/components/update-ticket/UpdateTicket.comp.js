import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export const UpdateTicket = ({msg,handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label> Reply</Form.Label>
        <Form.Text>Please reply</Form.Text>
        <Form.Control 
        name=""
        value={msg}
        onChange={handleOnChange} 
        as="textarea" row="5"
        />
        <div className="text-right mt-4">
        <Button variant ="info" type ="submit">
            Reply
        </Button>
        </div>
        </Form>
  )
}

UpdateTicket.propTypes={
  msg:PropTypes.string.isRequired,
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
}
