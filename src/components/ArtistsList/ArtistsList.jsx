//ArtistsList.jsx
import s from "./ArtistsList.module.css";

const ArtistsList = ({ artists }) => {
  return (
    <div>
      <ul>
        {artists.map(({ strArtistThumb, _id, strArtist, strBiographyEN }) => (
          <li key={_id}>
            <img src={strArtistThumb} alt={strArtist} loading="lazy" />
            <p className={s.artists_descr}>{strBiographyEN}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistsList;
