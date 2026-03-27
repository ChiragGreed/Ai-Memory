import { useEffect, useState } from "react"
import useItems from "../../Hooks/useItems"
import "./SearchBar.scss"

const SearchBar = () => {

    const { context, searchItemsHandler } = useItems();
    const { Items } = context;


    const [Query, setQuery] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        searchItemsHandler(Query);
    }

    useEffect(() => {
        console.log(Items);
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    return (

        <header className="search_bar">

            <label className="search_bar_icon" htmlFor="itemSearch">

                <i className="ri-search-line"></i>

            </label>

            <form onSubmit={submitHandler}>

                <input
                    type="text"
                    id="itemSearch"
                    placeholder="Search anything..."
                    value={Query}
                    onChange={handleSearch}
                />
            </form>

        </header>

    )

}

export default SearchBar