export const getGifs = async (category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=8&api_key=9bT5eYd9kKYJ03I3XZWROGyi0YDiUXCY`;
    const response = await fetch(URL);
    const {data} = await response.json();
    const gifs = data.map(img => {
        const {id,title,images} = img;
        return {
            id: id,
            title: title,
            url: images.downsized_medium.url
        }
    });
    
    return gifs;
}