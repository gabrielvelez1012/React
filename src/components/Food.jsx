

const Rico = () => {
    alert("Que rico")
    console.log("Gabriel")
  }


const Food = () => {
    return (
        <div className="food">
            <h1 className="title-food">My favortie food:</h1>
            <li>Leer</li>
            <li>Ver videos graciosos</li>
            <li>Jugar</li>
            <li>Ver videos informativos</li>
            <button className="button-food" onClick={Rico}>OK</button>
        </div>
    )
}

export default Food;