import { useEffect, useState } from 'react'
import { Contact } from './components/Contact.jsx'

function MyApp() {
    //const listContact = []
    const [listContacts, setListContacts] = useState([])
    
    /*useEffect(()=>{
        //équivalent à foreach(listContacts as contact)
        listContacts.map((contact)=>{
            return <h2>{contact.lastname}</h2>
        })
    })*/

    function getContacts() {
        fetch('http://localhost:8000/api/contacts')
        .then((res)=>res.json())
        .then(data => setListContacts(data['hydra:member']))
    }   

    return (
        <>
            <h1>Coucou la compagnie</h1>
            <button onClick={getContacts}>Récupérer la liste</button>
            {listContacts.map((contact, index)=>
                /*<div key={index}>
                    <h2>{contact.lastname}</h2>
                    <h3 className="muted">{contact.firstname}</h3>
                </div>*/
                <Contact 
                    key={index} 
                    contact={contact} 
                />
            )}
        </>
    )    
}

export default MyApp