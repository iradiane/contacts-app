import axios from 'axios';
export class contactService{
  static serverURL =  "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp ";
  static getAllContacts(){
    let dataURL =' ${this.serverURL}/contacts';
    return axios.get(dataURL);
  }
}