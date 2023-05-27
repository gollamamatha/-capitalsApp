import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return activeCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="app_container">
        <div className="capital_container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question_container">
            <select
              className="select_container"
              onChange={this.onChangeCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question"> is capital of which country ?</p>
          </div>
          <div className="country_container">
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
