// Mock movie dataset for CineMatch AI



// let url = "https://tastedive.com/api/similar?q=movie:inception&type=movie&info=1&limit=10&k=1061630-movierec-D50E145E"

let url = "https://api.watchmode.com/v1/releases?apiKey=EBnhOZqbFEXAI7QTnABkv8VuNKqBOFHHJXlwxLQW"


const getMovies = async () => {
  try {
    const response = await fetch(url);  
    const data = await response.json();

    console.log("Fetched movies:", data);
   
    return data.releases;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const movies = await getMovies();

// export const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     genre: "Sci-Fi",
//     year: 2010,
//     rating: 8.8,
//     thumbnail: "https://lh6.googleusercontent.com/proxy/SyVlL8UxE257dPVE-1Ns0F36v0mj865ftRNur1UIXkS67yv2f8ARKkgAc_mW3EoyEk6Sc5S8xO6-enHgZ-rtSzYoEjajl1iFYfI",
//     trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
//   },
//   {
//     id: 2,
//     title: "Interstellar",
//     genre: "Sci-Fi",
//     year: 2014,
//     rating: 8.6,
//     thumbnail: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     genre: "Action",
//     year: 2008,
//     rating: 9.0,
//     thumbnail: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
//   },
//   {
//     id: 4,
//     title: "Avatar",
//     genre: "Adventure",
//     year: 2009,
//     rating: 7.8,
//     thumbnail: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
//     trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
//   },
//   {
//     id: 5,
//     title: "Tenet",
//     genre: "Sci-Fi",
//     year: 2020,
//     rating: 7.5,
//     thumbnail: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
//     trailer: "https://www.youtube.com/embed/L3pk_TBkihU",
//   },
// ];
