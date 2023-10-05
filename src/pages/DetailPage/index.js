import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="detail-img"
      />
    </section>
  );
};

export default DetailPage;
