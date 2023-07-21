import axios from "axios";

const searchImages = async (query) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID o-pXJPW3i8EZzUPzYBKGVTnESNxnfl50H9lLEiyv_L0",
    },
    params: {
      query: query,
    },
  });

  return response.data.results;
};
export default searchImages;
