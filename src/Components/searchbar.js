export default function searchbar(){
    
    return(
        <header>
            <h1>Sweet Recipe </h1>
            <div className="search">
                <input  type="text" id="searchInput" placeholder="Enter Sweet Name...">
                    
                </input>
                <button id="searchButton">Search</button>
                <button id="recipeCloseBtn" className="close-button">&times;</button>
            </div>
        </header>
    );
}