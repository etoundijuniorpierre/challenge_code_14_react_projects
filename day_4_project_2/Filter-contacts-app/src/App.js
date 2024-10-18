import './App.css';
import { useState } from 'react';

function ContainDisplay() {
  class Personne {
    constructor(nom, prenom, email, phone, user) {
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.phone = phone;
      this.user = user;
    }
  }

  const personnes = [];

  const noms = [
    "Dupont", "Jean", "Pierre", "Kamden", "Bassa", "Nguyen", "Tchoumi", "Mbappe", "Ngangue", "Fomba",
    "Dumont", "Lebrun", "Marchal", "Dubois", "Moreau", "Fontaine", "Chevalier", "Rousseau", "Giraud", "Morin",
    "Lemoine", "Renard", "Perrin", "Clement", "Fournier", "Girard", "Lopez", "Boyer", "Martin", "Bernard"
  ];

  const prenoms = [
    "Jean", "Kamden", "Pierre", "Marie", "Sophie", "Paul", "Luc", "Nathalie", "Marc", "Elodie",
    "Thomas", "Claire", "Arthur", "Chloé", "Manon", "Lucas", "Julien", "Ines", "Yves", "Lea",
    "Noah", "Emma", "Louis", "Sarah", "Mathieu", "Alice", "Florian", "Victor", "Camille", "David"
  ];

  for (let i = 1; i <= 30; i++) {
    const nom = noms[i % noms.length];
    const prenom = prenoms[i % prenoms.length];
    const email = `${prenom.toLowerCase()}.${nom.toLowerCase()}${i}@example.com`;
    const phone = `01${Math.floor(100000000 + Math.random() * 900000000)}`;
    const user = `${prenom.charAt(0).toLowerCase()}${nom.toLowerCase()}`;

    const personne = new Personne(nom, prenom, email, phone, user);
    personnes.push(personne);
  }

  // Styles CSS en JS
  const styleContainer = {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const styleHeader = {
    height: "100%",
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    fontSize: "30px",
  };

  const styleMain = {
    width: "100%",
    display: 'grid',
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: '20px',
    justifyContent: 'center',
    alignItems: "center",
  };

  const styleBox = {
    border: "1px solid rgba(233, 109, 109, 0.7)",
    width: "300px",
    height: "200px",
    display: 'flex',
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const styleH2 = {
    background: "red",
    color: 'white',
    width: "100%",
    textAlign: 'center',
    marginTop: "8px",
    borderRadius: "8px 8px 0px 0px",
  };

  const styleTxt = {
    paddingLeft: "10px",
    marginTop: "-15px",
    paddingBottom: "10px",
  };

  // State pour gérer la valeur de recherche et les résultats filtrés
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPersonnes, setFilteredPersonnes] = useState(personnes);

  const handleSearch = (e) => {
    let valeur = e.target.value.toLowerCase();
    setSearchTerm(valeur);

    const filtered = personnes.filter(personne =>
      personne.nom.toLowerCase().includes(valeur)
    );
    setFilteredPersonnes(filtered);
  };

  return (
    <>
      <div className='container' style={styleContainer}>
        <div className="header" style={styleHeader}>
          <h1>Search Filter App</h1>
          <input
            type="text"
            placeholder='Search by first name'
            value={searchTerm}
            onChange={handleSearch}
            style={{
              outline: "none",
              border: "1px solid #888",
              width: "140px",
              padding: "5px 0px",
              paddingLeft: "6px",
            }}
          />
        </div>

        <div className="main" style={styleMain}>
          {filteredPersonnes.length > 0 ? (
            filteredPersonnes.map((personne, index) => (
              <div className="box" key={index} style={styleBox}>
                <h2 style={styleH2}>{personne.nom}</h2>
                <div className="txt" style={styleTxt}>
                  <p><span style={{ fontWeight: "bold" }}>Last Name: </span>{personne.prenom}</p>
                  <p><span style={{ fontWeight: "bold" }}>Email: </span>{personne.email}</p>
                  <p><span style={{ fontWeight: "bold" }}>Phone: </span>{personne.phone}</p>
                  <p><span style={{ fontWeight: "bold" }}>User Name: </span>{personne.user}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ContainDisplay;
