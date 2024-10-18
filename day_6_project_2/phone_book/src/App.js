import React, { useState } from 'react';
import './App.css';
import Call from './call.png';
import Pbook from './Pbook.png';

function App() {
  class Contact {
    constructor(profil, nom, prenom, phone) {
      this.profil = profil;
      this.nom = nom;
      this.prenom = prenom;
      this.phone = phone;
    }
  }

  const profils = [Pbook];
  const noms = ["Nguele", "Moukoko", "Ekanga", "Fouda", "Mbarga", "Nkongho", "Owona", "Essomba", "Ewodo", "Abega", "Atangana", "Mba", "Etonde", "Ebogo", "Amougou", "Ebene", "Njoya", "Tchokote", "Foumban", "Nnomo"];
  const prenoms = ["Alain", "Brigitte", "Charles", "David", "Emilie", "François", "Gisele", "Henri", "Isabelle", "Jacques", "Karine", "Louis", "Marie", "Nathalie", "Olivier", "Patricia", "Quentin", "Rene", "Sophie", "Thierry"];
  const phones = [
    "+237 690 123 456", "+237 691 987 654", "+237 676 543 210", "+237 677 123 789", "+237 678 456 321",
    "+237 679 654 987", "+237 680 321 654", "+237 681 987 321", "+237 682 234 567", "+237 683 567 890",
    "+237 684 678 123", "+237 685 789 456", "+237 686 890 678", "+237 687 234 890", "+237 688 345 901",
    "+237 689 456 012", "+237 690 567 123", "+237 691 678 234", "+237 692 789 345", "+237 693 890 456"
  ];

  const contacts = [];
  for (let i = 0; i < 150; i++) {
    const profil = profils[0];
    const nom = noms[Math.floor(Math.random() * noms.length)];
    const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
    const phone = phones[Math.floor(Math.random() * phones.length)];
    const contact = new Contact(profil, nom, prenom, phone);
    contacts.push(contact);
  }

  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.prenom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "100%", gridTemplateRows: "18vh 80.3vh", overflow: "hidden" }}>
        <div className="boxtitle" style={{ background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "35px" }}>
          <h1>Phone Book APP</h1>
        </div>

        <div className="boxmain" style={{ background: "#222", padding: "15px" }}>
          <div className="navelem">
            <p id='icon'>
              <img src={Pbook} alt="Phone Book Icon" id='img' />
            </p>

            <input
              type="text"
              placeholder="Search contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <p id='icon'>
              <img src={Call} alt="Call Icon" id='img' />
            </p>
          </div>

          <h3 style={{ color: "#fff", textAlign: "center", fontSize: "25px" }}>Display Contacts</h3>

          <div className="boxcontact" style={{
            color: "#fff",
            textAlign: "center",
            height: "600px",
            overflow: "auto",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
            {filteredContacts.map((contact, index) => (
              <div key={index} style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", gridAutoColumns: "25% 25% 25% 25%", borderBottom: "1px solid rgb(245, 245, 245, 0.3)", padding: "3px", marginBottom: "15px" }}>
                <img src={contact.profil} alt="Profile" style={{ width: "38px", height: "38px", marginRight: "10px" }} />
                <p style={{}}>{contact.nom}</p>
                <p style={{}}>{contact.prenom}</p>
                <a href={`tel:${contact.phone}`} style={{ textDecoration: "none", color: "rgb(0, 0, 255, 0.8)", cursor: "pointer" }}>
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
