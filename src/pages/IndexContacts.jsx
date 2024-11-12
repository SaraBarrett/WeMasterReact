import {CONTACT_DATA} from '../data/contactData'


export default function IndexContacts(){
    return(
        <div>
        <h1>Páginas de Contactos</h1>
        <h6>{CONTACT_DATA.name}</h6>
        <h6>{CONTACT_DATA.job}</h6>
        <h6>{CONTACT_DATA.email}</h6>
        </div>
    )
}