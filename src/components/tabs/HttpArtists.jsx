//Http.jsx

// import axios from "axios";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import ArtistsList from "../ArtistsList/ArtistsList";
import SearchForm from "../SearchForm/SearchForm";
import debounce from "lodash.debounce";
import { getArtistsApi } from "../../servises/api";

const Loader = () => {
  return <h2>Loading...</h2>;
};

const ErrorMessage = ({ error }) => {
  return <h2>{error}</h2>;
};

const Http = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //handlers
  const getArtists = async (search) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getArtistsApi(search); // fetch data

      setArtists(data.artists);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getArtistsApi();

        setArtists(data.artists);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //JSX
  return (
    <Container>
      <input
        type="text"
        onChange={debounce((e) => {
          getArtists(e.target.value);
        }, 300)}
      />
      <SearchForm onSubmit={getArtists} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ArtistsList artists={artists} />
    </Container>
  );
};

export default Http;
