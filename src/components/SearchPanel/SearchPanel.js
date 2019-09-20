import React, {Component} from 'react';
import './SearchPanel.css';
class SearchPanel extends Component{

    searchTerm(event){
        this.props.searchTerm(event.target.value)
    }

    render(){
        return(
            <input  className="form-control search-input"
                    type="text"
                    placeholder="search"
                    onChange={this.searchTerm.bind(this)}
            />

        )
    }

}


export default SearchPanel;