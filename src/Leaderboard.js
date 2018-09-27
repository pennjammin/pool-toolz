import React, { Component } from 'react';
import styled from 'styled-components';


{/*const Title = styled.h1`
    color: #F3CD5D;
`;*/}

const Table = styled.table`
    border: 0;
    border-collapse: collapse;
    padding: 5px;
`;

const Data = styled.td`
    border: 0;
    padding: 5px;
    font-size: 20px;
    color: #61DAFB;
    :first-child{
        font-size: 18px;
    }
`;

const NameInput = styled.input`
    background-color: #3c3d3c;
    color: #fff;
`;


/**
   * @class Leaderboard
   * @desc Compares the score property of each user object
   * @param {Prop} users-an array of objects with name and score properties
   * @param {Prop} paginate-integer to determine how many users to display on each page
*/
class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.sortUsersByScore = this.sortUsersByScore.bind(this);
    this.sortUsersByName = this.sortUsersByName.bind(this);
    this.filterRank = this.filterRank.bind(this);
    this.increasePage = this.increasePage.bind(this);
    this.decreasePage = this.decreasePage.bind(this);

    this.state = {
      users: this.props.users,
      ranking: [],
      asc: false,
      alph: false,
      page: 1,
      pageMax: 1,
    };
  }

  /**
     * @function componentDidMount
     * @desc Sorts users by score then adds a ranking key to each user object when the component loads. Then sets the ranking state
  */
  componentDidMount() {
    const ranking = this.state.users;
    const paginate = this.props.paginate;
    ranking.sort(this.compareScore).reverse();
    ranking.map((user, index) => user.rank = index +1);
    ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
    this.setState({ pageMax: ranking[ranking.length - 1].page})
    this.setState({ ranking: ranking});
  }

  /**
     * @function compareScore
     * @desc Compares the score property of each user object
     * @param {Object, Object} user
  */
  compareScore(a,b) {
    if (a.score < b.score)
      return -1;
    if (a.score > b.score)
      return 1;
    return 0;
  }

  /**
     * @function compareName
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */
  compareName(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  /**
     * @function sortUsersByScore
     * @desc Sorts the ranking by score either ascending or descending
  */
  sortUsersByScore() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.asc === true) {
      ranking.sort(this.compareScore).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: false});
      this.setState({ alph: false});
    } else {
      ranking.sort(this.compareScore);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: true});
      this.setState({ alph: false});
    }
  }

  /**
     * @function sortUsersByName
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
  sortUsersByName() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.compareName).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.compareName);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }

  /**
     * @function filterRank
     * @desc Filters through the ranking to find matches and sorts all matches by score
     * @param {String} search input
  */
  filterRank(e) {
    const ranking = this.state.users;
    const paginate = this.props.paginate;
    const newRanking = [];
    const inputLength = e.target.value.length
    for(var i = 0; i < ranking.length; i++) {
      const str = ranking[i].name.slice(0, inputLength).toLowerCase();
      if(str === e.target.value.toLowerCase()) {
        newRanking.push(ranking[i]);
      }
    }
    newRanking.sort(this.compareScore).reverse();
    newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
    this.setState({ ranking: newRanking});
    this.setState({ page: 1});
    this.setState({ pageMax: newRanking[newRanking.length - 1].page})
  }

  /**
     * @function increasePage
     * @desc Increments page by one
     * @param {Event} Click
  */
  increasePage(e) {
    let page = this.state.page;
    if(page < this.state.pageMax){
      page += 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function increasePage
     * @desc Decrements page by one
     * @param {Event} Click
  */
  decreasePage(e) {
    let page = this.state.page;
    if(page > 1){
      page -= 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function render
     * @desc renders jsx
  */
  render() {
    return (
      <div>
        <Table id="lBoard">
          <tbody>
            <tr>
              <Data colspan="10000">
                <form onChange={this.filterRank}>
                  Name: <NameInput type="search" name="search" placeholder="Search"/>
                </form>
              </Data>
            </tr>
            <tr>
              <Data onClick={ this.sortUsersByName }></Data>
              <Data onClick={ this.sortUsersByScore }> Rank </Data>
              <Data onClick={ this.sortUsersByScore }> Score </Data>
            </tr>
            {
            this.state.ranking.map((user, index) =>
               <tr key={index}>
                { user.page === this.state.page ? <Data >{ user.name }</Data> : null }
                { user.page === this.state.page ? <Data>{ user.rank }</Data> : null }
                { user.page === this.state.page ? <Data >{ user.score }</Data> : null }
               </tr>
             )
           }
          </tbody>
        </Table>
        {/*<p onClick={ this.decreasePage }>prev</p>
        { this.state.page === 1 ? null: <p onClick={ this.decreasePage }> { this.state.page - 1 }</p>}
        <p> { this.state.page }</p>
        { this.state.page < this.state.pageMax ? <p onClick={ this.increasePage }> { this.state.page + 1 }</p>: null }
        <p onClick={ this.increasePage }>next</p>*/}
      </div>
    );
  }
}
export default Leaderboard;