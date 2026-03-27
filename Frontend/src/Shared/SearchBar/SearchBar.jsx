import './SearchBar.scss'

const SearchBar = () => {
    return (
        <header className='search_bar'>
            <label className='search_bar_icon' for="itemSearch">
                <i class="ri-search-line"></i>
            </label>
            <input type="text" id="itemSearch" placeholder='Search for item' />
        </header>
    )
}

export default SearchBar
