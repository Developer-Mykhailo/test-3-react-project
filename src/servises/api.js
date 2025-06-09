import axios from "axios";

export const getArtistsApi = async (search) => {
  const { data } = await axios.get(
    `https://sound-wave.b.goit.study/api/artists`,
    {
      params: {
        ...(search && { name: search }),
      },
    }
  );
  return data;
};
