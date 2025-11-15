import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient";

interface Movie{
    _id : string,
    judul : string,
    tahunRilis : string,
    sutradara : string,
    createdAt : string,
    updatedAt : string
}
function Movie (){
    const [movie, setMovies] = useState<Movie[]>([])

    const fetchMovies = useCallback(async() => {
        console.log("------------");
        
        const response = await ApiClient.get("/movie")
console.log(response);

        if(response.status == 200) {
            setMovies(response.data.data)
        }


    }, [])

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    return <div className="container mx-auto">
        <div className="d-flex justify-content-between mb-3">
        <h4> Movie Page</h4>
        <NavLink to = "/add-movie" className="btn btn-primary"> Add Movie </NavLink>
        </div>
    </div>
}

export default Movie;