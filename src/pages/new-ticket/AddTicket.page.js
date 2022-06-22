import React,{useEffect, useState} from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import {AddTicketForm} from '../../components/add-ticket-form/AddTicketForm.comp';
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp';
import {shortText} from '../../utils/validation';

const initialFrmDt={
  subject:"",
  issueDate:"",
  detail:""
};

const initialFrmError={
  subject:false,
  issueDate:false,
  detail:false
};
export const AddTicket = () => {

const [frmData,setFrmData] = useState(initialFrmDt);
const [frmDataErro,setFrmDataErro] = useState(initialFrmError);
useEffect(()=>{},[frmData,frmDataErro]);

const handleOnChange = (e) =>{
  const{ name, value } =e.target;

  
   setFrmData({
     ...frmData,
     [name]:value
   });
  //console.log(name,value);
  
};

const handleOnSubmit = async (e)=>{
  e.preventDefault();
  setFrmDataErro(initialFrmError)

  const isSubjectValid = await shortText (frmData.subject);
  console.log(isSubjectValid);
  console.log("up");
  setFrmDataErro({
    ...initialFrmError,
    subject: !isSubjectValid,
  });


  console.log("Form submit received",frmData);
  
};
  return (
    
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"/>
            </Col>

        </Row>
        <Row>
            <Col>
            <AddTicketForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDataError={frmDataErro}
            frmDt={frmData}
            />
            </Col>
        </Row>
    </Container>
  );
};
