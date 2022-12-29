import {Component} from 'react'

import CollegeItem from '../CollegeItem'

import './index.css'

class CollegeSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {collegesList} = this.props
    const searchResults = collegesList.filter(eachCollege =>
      eachCollege.rank >= searchInput,
    )

    return (
      <div className="app-container">
        <div className="colleges-search-container">
          <h1 className="heading">College Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Enter Your Rank"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="colleges-list">
            {searchResults.map(eachCollege => (
              <CollegeItem
                key={eachCollege.id}
                collegeDetails={eachCollege}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CollegeSearch