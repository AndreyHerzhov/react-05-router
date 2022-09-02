import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getSinglePosts } from 'shared/api/posts';

const SinglePostPage = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null
    })
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,

            }))
            try {
                const result = await getSinglePosts(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,

                    }
                })
            }
        }
        fetchPosts()
    }, [id, setState] ) 

    const goBack = () => navigate(-1)

    const { title, body } = state.item
    
    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default SinglePostPage