import React from 'react';
import { Link } from "react-router-dom";

let ContactList = () => {
  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">Contact Manager
                  <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New</Link>
                </p>
                <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aliquid aut ea, sit praesentium iure impedit? Ducimus, fuga ex qui aut et commodi accusantium accusamus suscipit vitae repellat? Illum, quis.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                  <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Search Names" />
                  </div>
                  </div>
                  <div className="col">
                  <div className="mb-2">
                    <input type="submit" className="btn btn-outline-dark" value="Search" />
                  </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
            <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s" alt="" className="img-fluid contact-img"/>
            </div>
            <div className="col-md-7 ">
             <ul className="list-group">
              <li className="list-group-item list-group-items-action">
                Name :<span className="fw-bold">DIANE</span>

              </li>
              <li className="list-group-item list-group-items-action">
                Mobile:<span className="fw-bold">+25078000000</span>

              </li>
              <li className="list-group-item list-group-items-action">
                Email :<span className="fw-bold">iradu123@gmail.com</span>

              </li>
             </ul>
            </div>
            <div className="col-md-1 d-flex flex-column align-items-center">
            <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
              <i class="fa fa-eye"/>
            </Link>
            <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
              <i class="fa fa-pen"/>
            </Link>
            <button  className="btn btn-danger my-1">
              <i class="fa fa-trash"/>
            </button>
            </div>
            </div>
        
          </div>
          </div>
          </div>

          </div>

        </div>

      </section>
    </React.Fragment>
  )
};

export default ContactList;
