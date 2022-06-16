export const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/worlds" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search Worlds..."
            name="s"
        />
    </form>
);