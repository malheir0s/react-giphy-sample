import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';

import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import api_giphy from '../../services/api';


export default function Query (){

    const params = useParams();

    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);

    function getQueryGifs(){
        var array = [...gifs];
        api_giphy.get('/gifs/search', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                q: params.q,
                limit: 20,
                offset: 20*offset
            }
        }).then(response => (
            array.push(...response.data.data),
            setGifs(array)
       )).catch(function (error) {
           console.log(error)
       })
    }

    function isPageBottom() {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom) {
            setOffset(offset=> offset+1)
        }
    }

    useEffect(() => {
        
        getQueryGifs();

        window.addEventListener('scroll', isPageBottom, {
            passive: true
        });

        
    }, [offset])

    return(
        <div>
            <Navbar/>

            <div className="gif-container">
                {
                    gifs.map(
                        gif => (
                            <Link to={`/gif/${gif.id}`}><img src={`http://media2.giphy.com/media/${gif.id}/giphy.gif`} /></Link>
                        )
                    )
                }
            </div>
        </div>
    )
}