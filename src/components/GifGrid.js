import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {

    //const [images, setimages] = useState([]);

    const {data: images, loading} = useFetchGifs(category);


    /*useEffect(() => {
        getGifs(category).then(gifs => {
            setimages(gifs);
        })
    }, [category]);*/

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <p className="animate__animated animate__flash">{loading && 'Loading...'}</p>
            <ol className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
