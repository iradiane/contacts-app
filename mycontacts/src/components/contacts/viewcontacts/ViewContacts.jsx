import React from 'react';
import {Link} from "react-router-dom";
let ViewContact = () =>{
  return(
    <React.Fragment>
     <section className="view-contact-intro p-3">
      <div className="container">
        <div className="row">
          <div className="col">
           <p className="h3 text-warning fw-bold">View Contact</p>
           <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aliquid aut ea, sit praesentium iure impedit? Ducimus, fuga ex qui aut et commodi accusantium accusamus suscipit vitae repellat? Illum, quis.</p>
          </div>

        </div>

      </div>

     </section >
     <section className="view-contact mt-3">
     <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
        <img src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png" alt="" className="contact-img"/>
        </div>
       <div className="col-md-8">
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
              <li className="list-group-item list-group-items-action">
                Group:<span className="fw-bold">iradu123@gmail.com</span>

              </li>
              <li className="list-group-item list-group-items-action">
                Company :<span className="fw-bold">iradu123@gmail.com</span>

              </li>
              <li className="list-group-item list-group-items-action">
                Title :<span className="fw-bold">iradu123@gmail.com</span>

              </li>
             </ul>
       </div>
       <div className="row">
        <div className="col">
         <Link to={'/contacts/list'} className="btn btn-success">Back</Link>
        </div>
       </div>
      </div>

     </div>
     </section>
    </React.Fragment>

  )
};
export default  ViewContact;