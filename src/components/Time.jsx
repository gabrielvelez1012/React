

const Times = () => {
    alert("Llegó la hora!")
    console.log("Gabriel")
  }

const Time = () => {
    return (
        <div className="time">
            <h1 className="title-time">Free Time:</h1>
            <li>Leer</li>
            <li>Ver videos graciosos</li>
            <li>Jugar</li>
            <li>Ver videos informativos</li>
            <button className="button-time" onClick={Times}>OK</button>
        </div>
    )
}

export default Time;