import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        fetch('http://127.0.0.1:5000/allrecipes')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        </>
    )
}

export default Home;
