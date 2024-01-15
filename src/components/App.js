import React, { useEffect, useState } from "react"

function App(){
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(res => setDogImage(res.message))
    }, [])

    if (dogImage === null) return <p>Loading...</p>

    return <img alt="A Random Dog" src={dogImage}></img>
}

export default App