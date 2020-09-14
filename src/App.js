import React, {Component} from 'react';
import Table from './components/Table/Table';
import Loader from './components/Loader';
import SearchFilter from './components/SearchFilter';
import SizeSelector from './components/SizeSelector';
import UserInfo from './components/UserInfo';

//sort high order function
import compareValues from './compareValues';

import 'bootstrap/dist/css/bootstrap.min.css';

import { LONG_REQ, SHORT_REQ, SELECT_OPT } from './constants.js';


class App extends Component {
  state = {
    isLoading: false,
    isSizeSelected: false,
    choisedUser: null,
    searchQuery: '',
    selectedSize: 'short',
    sortType: 'disabled',
    sortRow: '',
    
    data: [],
  };
  
  async fetchData (searchQuery) {
     try{
        const response = await fetch(
          searchQuery, {
            method: 'GET',
            headers:{
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        const data = await response.json();
        this.setState({data: data, isLoading: false});
     }
     catch(e){
      console.log(`Error! ${e}`);
     }
  }

  handleSort = (sortRow) => {
    // make copy data
    const data = this.state.data.concat();
    const lastSortRow = this.state.sortRow.concat();
    let sortType = '';
    
    // sort should start with 'asc' for new row
    if(lastSortRow !== sortRow){
      sortType = 'asc';
    }else{
      sortType = this.state.sortType ===  'asc' ? 'desc' : 'asc';
    }
    // use external function for sorting
    data.sort(compareValues(sortRow, sortType));

    this.setState({data, sortType, sortRow});
  }

  handleSelectOnSubmit = (e) => {
    const { selectedSize } = this.state;
    e.preventDefault();
    this.setState({isSizeSelected: true, isLoading: true});

    switch(selectedSize){
      case 'short': 
        this.fetchData(SHORT_REQ);
        break;
      case 'long':
        this.fetchData(LONG_REQ);
        break;
      default:
        break;
    }
  }

  handleSelectOnChange = ({target: {value}}) => {
    this.setState({selectedSize: value});
  }

  // TODO:
  handleSearchOnClick = () =>{

    if(this.state.searchQuery !== ''){
      const data = this.state.data.concat();
      const { searchQuery } = this.state;
      data.filter((item) => {
        let query = searchQuery.toLowerCase();

        return (item.id === query) || 
        (item.firstName.toLowerCase() === query) ||
        (item.lastName.toLowerCase() === query) ||
        (item.phone.toLowerCase() === query) ||
        (item.email.toLowerCase() === query)
      });
    }

    this.setState({data: filteredData});
  }

  handleSearchOnChange = ({target: {value}}) => {
    console.log(value);
    this.setState({searchQuery: value});
  }

  handleUserChoise = (choisedUser) => {
    this.setState({choisedUser});
  }


  render(){
    const { 
            isSizeSelected, 
            isLoading, 
            selectValue, 
            data, 
            sortType, 
            sortRow, 
            choisedUser, 
            searchQuery 
          } = this.state;
    
    if(!isSizeSelected){
      return (
        <SizeSelector 
          options={SELECT_OPT} 
          handleSelectOnSubmit={this.handleSelectOnSubmit} 
          handleSelectOnChange={this.handleSelectOnChange}
          selectValue={selectValue}
        />
      );
    }
    
    return (
      <>
        {
          isLoading ? 
          <Loader/> :
          <>
            <SearchFilter 
              handleSearchOnChange={this.handleSearchOnChange} 
              handleSearchOnClick={this.handleSearchOnClick}
              searchQuery={searchQuery}
            />
            <Table 
              data={data} 
              sortType={sortType} 
              sortRow={sortRow} 
              handleSort={this.handleSort} 
              handleUserChoise={this.handleUserChoise}
            />
          </>
        }
        {
          choisedUser ?
          <UserInfo choisedUser={choisedUser} /> : 
          null
        }
      </>
    );
  }
}

export default App;

