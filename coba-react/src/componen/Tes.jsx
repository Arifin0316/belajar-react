import { useState } from "react"
import '../css/tes.css'

function Tes() {
  return (
    <div className="container">
    < Tolbar
    onPlayMusic={() => alert('palay music di klik')}
    onPlayVido={() => alert('palay video di klik')}
    />
    < Click/>
    < Form/>
    < Form1/>
    </div>
  )
}

function Tolbar({onPlayMusic, onPlayVido}) {
    return (
        <>
        <button onClick={onPlayMusic}>musik</button>
        <button onClick={onPlayVido}>video</button>
        </>
    )
}

function Click() {
    const [status, setStatus] = useState(false)
    function headleClick() {
            setStatus(!status)
    }
    return(
        <button onClick={headleClick}>{status ? 'salah' : 'benar'} detail</button>
    )
}

 function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
      });
      function heandleFirsName(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        })
      }
      function heandleLastName(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        })
      }
      function heandleEmail(e) {
        setPerson({
            ...person,
              email: e.target.value
        })
      }
    return (
      <>
      <label>
          nama depan:
          <input type="text" 
          value={person.firstName}
          onChange={heandleFirsName}/>
      </label>
      <label>
          nama belakang:
          <input type="text" 
          value={person.lastName}
          onChange={heandleLastName}
          />
      </label>
      <label>
          email:
          <input type="email" 
          value={person.email}
          onChange={heandleEmail}
          />
      </label>
      <p>
        {person.firstName} {''}
        {person.lastName} {''}
        ({person.email})
      </p>
      </>
    )
  }

 function Form1() {
    const [person, setPerson] = useState({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });

    function heandleChangName(e) {
        setPerson({
            ...person,
            name: e.target.value
        })
    }
    function heandleChangTitle(e) {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title: e.target.value
            }
        })
    }
    function heandleChangCity(e) {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city: e.target.value
            }
        })
    }
    function heandleChangImage(e) {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                image: e.target.value
            }
        })
    }

    return (
        <>
        <label>
            <input type="text" 
            value={person.name}
            onChange={heandleChangName}
            />
        </label>
        <label>
            <input type="text" 
            value={person.artwork.title}
            onChange={heandleChangTitle}
            />
        </label>
        <label>
            <input type="text" 
            value={person.artwork.city}
            onChange={heandleChangCity}
            />
        </label>
        <label>
            <input type="text" 
            value={person.artwork.image}
            onChange={heandleChangImage}
            />
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {'by'}
            {person.name}
            <br/>
            (terletak di kota({person.artwork.city}))
        </p>
        <img src={person.artwork.image} alt={person.name} />
        </>
    )
}

export default Tes