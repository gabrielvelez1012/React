
const Vida = () => {
    alert("Esto es vida!")
    console.log("Gabriel")
  }


const Hobbies = () => {
    return (
        <div className="hobbies">
            <h1 className="title-hobbies">Mis hobbies son:</h1>
            <li>Leer</li>
            <li>Ver videos graciosos</li>
            <li>Jugar</li>
            <li>Ver videos informativos</li>
            <button className="button-hobbies" onClick={Vida}>OK</button>
        </div>
    )
}

export default Hobbies;