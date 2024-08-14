import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

const List = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const movies = await fetch('../../assets/data.json');
            const moviesJSON = await movies.json();

            if (moviesJSON) {
                setData(moviesJSON);
                setLoading(false);
                console.log('acrylic');
            }

        }
        fetchData()
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='row'>
            {data.map(movie =>
                <div key={movie.id} className='col-sm-2'>
                    <Card movie={movie} />
                </div>
            )}
        </div>
    )
}

export default List;