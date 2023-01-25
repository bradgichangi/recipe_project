import React, { useEffect, useState} from 'react';

const Home = () => {

    const [recipes, setRecipes] = useState([])
    const [textInput, setTextInput] = useState('')

    useEffect(() => {
        fetch('http://127.0.0.1:5000/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
                console.log(data)
            })
    }, [])

    function handleChange(e) {
        setTextInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addRecipe()
    }

    function addRecipe() {
        fetch('http://127.0.0.1:5000/recipe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name" : "Test" })
        })
            .then(response => console.log(response.data))
    }

    return (
        <>
            <h1>Home Page</h1>
            <p>Add a Recipe</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <input type="submit" />
            </form>
            {recipes.map(obj => <p>{obj.name}</p>)}
        </>
    )
}

export default Home;
