import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';
export const ResetPassword = ({handleOnchange,handleOnResetSubmit,formSwitcher,email,pass}) => {
  return (
    <Container>
      <Row>
        <Col>
        <h1 className="text-info text-center">Reset Password</h1>
        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
          <Form.Group>
            <Form.Label>Email Address    </Form.Label>
            <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleOnchange}
            placeholder="Enter Email"
            required
            />

          </Form.Group>
          
            <Button type="submit">Reset Password</Button>
        </Form>
        <hr />
        </Col>
      </Row>
      <Row>
      <Col>
          <a href="#!" onClick={()=>formSwitcher("login")}>Login Now</a>  
      </Col>
      </Row>
    </Container>

  );
};

ResetPassword.propTypes={
  handleOnchange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
 
};