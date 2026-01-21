import React from "react";
import PropTypes from "prop-types";

function Movie({ rnum, movieNm, openDt }) {
    return <div className="movie">
        <h3 className="movie_title"> {movieNm} </h3>
        <h5 className="movie_openDt"> {openDt} </h5>
    </div>;
}

Movie.prototype = {
    rnum: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired
}

export default Movie;