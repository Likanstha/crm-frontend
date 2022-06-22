import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp";
import {SearchForm} from '../../components/search-form/SearchForm.comp'
import {TicketTable} from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json"

export const TicketLists = () => {
const [str, setStr]=useState("");
const [ displayTicket, setDispTicket]=useState(tickets);
   
useEffect(()=>{},[str,displayTicket]);

const handleOnChange=(e)=>{
    const {value} =e.target;
    setStr(value);
    searchTicket(value);
};

const searchTicket = (strr) =>{
    const displayTickets= tickets.filter(row=> 
    row.subject.toLowerCase().includes(strr.toLowerCase()));
    //console.log(displayTickets);
    setDispTicket(displayTickets);
};

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page = "Ticket Lists" />  
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Button variant="info">Add New Ticket</Button>
            </Col>
            <Col className="text-right">
                <SearchForm 
                handleOnChange={handleOnChange}
                str={str}/>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
            <TicketTable tickets={displayTicket}/>
            </Col>
        </Row>

    </Container>

  )
}
