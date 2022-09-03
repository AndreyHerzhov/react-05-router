import { useState } from "react"

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: "",
    })

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState({
            ...state,
            [name]: value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({...state})
        setState({
            search: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={state.search} onChange={handleChange} name="search"  />
            <button>Search</button>
        </form>
    )
}

export default PostsSearchForm