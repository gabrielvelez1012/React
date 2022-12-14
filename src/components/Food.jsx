

const Rico = () => {
    alert("Que rico")
    console.log("Gabriel")
  }


const Food = () => {
    return (
        <div className="food">
            <h1 className="title-food">My favorites food:</h1>
            <li>Guatita</li>
            <li>Costilla de cerdo</li>
            <li>Pizza</li>
            <li>Churrasco</li>
            <button className="button-food" onClick={Rico}>OK</button>
        </div>
    )
}

export default Food;