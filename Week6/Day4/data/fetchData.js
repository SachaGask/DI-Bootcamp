
//fetchdata function
// returns JSON as an Array/Object
// @ param URL as a string
// fest the data with axios/fetch

export const fetchdata = async (url) => {
    const res = await exios.get(url);
    return res.data;
}