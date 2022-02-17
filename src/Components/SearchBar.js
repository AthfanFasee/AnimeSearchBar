import React from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


class SearchBar extends React.Component {
   
    state = {
        searchWord : "",
        filteredData : []
    }

    handleChange = (event) => {
        this.setState({searchWord: event.target.value})
        this.newFilter = this.props.data.filter(name => {
            return name.toLowerCase().includes(this.state.searchWord.toLowerCase());
        })

        if(this.searchWord === "") {
            this.setState({filteredData: []});
        } else {
            this.setState({filteredData: this.newFilter});
        }
    }

    ClearIcon = () => {
        this.setState({searchWord: ""})
        this.setState({filteredData: []})
    }

    render() {
        return (
            <div className="search">

                <div className="searchInputs">
                    <input type="text" value={this.state.searchWord} onChange={this.handleChange} placeholder="Search Anime" className="input" />
                    <div className="searchIcon">
                        {!this.state.searchWord ?  <SearchIcon /> : <CloseIcon onClick={this.ClearIcon} className="clearBtn"/>}    
                        </div>
                </div>

                {this.state.filteredData.length !== 0 &&
                <div className="dataResult">
                    {this.state.filteredData.slice(0, 15).map((name, key) => {
                        return <a className="dataItem"><p>{name}</p></a>
                    })}
                </div>
                }
            </div>
        )
        
    }
}

export default SearchBar;