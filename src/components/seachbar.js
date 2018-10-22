import React from 'react'

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state ={ input : ''}
    }

    render() {
        return(
            <div className='search-bar'>
             <input 
             value = {this.state.input}
             onChange={ (event) => this.onInputChange(event.target.value) }
             />
            </div>
        )
    }

    onInputChange(input){
        this.setState({input})
        this.props.onSearchInput(input)
    }
}

export default SearchBar