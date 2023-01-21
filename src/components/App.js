import React from 'react';
import Searchbar from "./SearchBar"
import MovieList from "./MovieList"

class App extends React.Component {
    
    state = {

    }
    
    render() {
        
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Searchbar />
                    </div>
                </div>
                <MovieList />
            </div>
        )

    }    
    
    
}

export default App