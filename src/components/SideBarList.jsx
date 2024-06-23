import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
function SideBarList() {
   
    return (
        
      <div className="text-white bg-[#1E293B]">
        <p className='text-gray-400  '>PAGES</p>
        <div className='custom-accordion'>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" >
              <Accordion.Header >Dashboard</Accordion.Header>
              <Accordion.Body>
                <p>Main</p>
                <p>Analytics</p>
                <p>Fintech</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" >
              <Accordion.Header >E-Commerce</Accordion.Header>
              <Accordion.Body >
                <p>Customers</p>
                <p>Orders</p>
                <p>Invoices</p>
                <p>Shop</p>
                <p>Shop 2</p>
                <p>Single Product</p>
                <p>Cart</p>
                <p>Cart 2</p>
                <p>Cart 3</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" >
              <Accordion.Header >Community</Accordion.Header>
              <Accordion.Body>
                <p>community</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" >
              <Accordion.Header >Finance</Accordion.Header>
              <Accordion.Body>
                <p>Finance</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" >
              <Accordion.Header >Job Board</Accordion.Header>
              <Accordion.Body>
                <p>Job Board</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" >
              <Accordion.Header >Task</Accordion.Header>
              <Accordion.Body>
                <p>Task</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" >
              <Accordion.Header >Message</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="7" >
              <Accordion.Header >Inbox</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="8" >
              <Accordion.Header >Calendar</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="9" >
              <Accordion.Header >Campaigns</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="10" >
              <Accordion.Header >Settings</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="11" >
              <Accordion.Header >Utility</Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  }
export default SideBarList;
