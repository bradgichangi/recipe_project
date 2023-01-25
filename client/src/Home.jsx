import React, { useEffect, useState} from 'react';

const Home = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
                console.log(data)
            })
    }, [])

    function addRecipe() {
        fetch('http://127.0.0.1:5000/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  })
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }

    return (
        <>
            <h1>Home Page</h1>
            <p>Add a Recipe</p>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
            {recipes.map(obj => <p>{obj.name}</p>)}
        </>
    )
}

export default Home;
