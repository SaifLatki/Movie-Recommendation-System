import AxiosClient from "./AxiosClient";

export const categrories = {
    movie: 'movie',
    tv: 'tv',
};
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
};

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return AxiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return AxiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = cate + '/' + id + '/videos';
        return AxiosClient.get(url, { params: {} });
    },
    search: (cate, params) => {
        const url = 'search/' + cate;
        return AxiosClient.get(url, { params });
    },  
    detail: (cate, id, params) => {
        const url = cate + '/' + id;
        return AxiosClient.get(url, { params });
    },
    credits: (cate, id) => {
        const url = cate + '/' + id + '/credits';   
        return AxiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = cate + '/' + id + '/similar';   
        return AxiosClient.get(url, { params: {} });
    },
};
