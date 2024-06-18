
import { useState, useEffect } from 'react'
import '../assets/css/componentes/card.css'
import { buscar } from '../api/api'

const ListPosts = ({ url }) => {
    const [post , setPost] = useState([]);

    useEffect(()=> {
        buscar(url,setPost)
        console.log(post)
    },[url])

    return (
        <section className="posts container">

        </section>
    )
}

export default ListPosts