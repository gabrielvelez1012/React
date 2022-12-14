

const iLiked = () => {
    alert("I liked")
    console.log("Gabriel")
  }


const Stack = () => {
    return (
        <div className="stack">
            <h1 className="title-stack">My stacks:</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <button className="button-stack" onClick={iLiked}>OK</button>
        </div>
    )
}

export default Stack;