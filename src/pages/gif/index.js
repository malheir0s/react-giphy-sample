import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


import Navbar from '../../components/navbar';
import api_giphy from '../../services/api';




import './styles.css';

export default function Gif() {

    const params = useParams();

    const [gif, setGif] = useState('');

    function getGifById() {
        api_giphy.get(`/gifs/${params.id}`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                gifs_id: params.id
            }
        }).then(response => {
            setGif(response.data.data)
        }).catch(function (error) {
            console.log(error)
        })
    }


    useEffect(() => {
        getGifById()
    }, [])

    return (
        <div>
            <Navbar />

            <div className="single-gif-container">

                <h1>{gif.title}</h1>
                <img src={`http://media2.giphy.com/media/${gif.id}/giphy.gif`} />

                <ul>
                    <li>Criado por: {gif.username}</li>
                    <li>Fonte: {gif.source_post_url}</li>
                    <li>Criado em: {gif.create_datetime}</li>
                </ul>
            </div>

        </div>
    )
}