import React, {Component} from 'react';
import Table from './components/Table/Table';
import Loader from './components/Loader';
import SearchFilter from './components/SearchFilter';
import SizeSelector from './components/SizeSelector';
import compareValues from './components/compareValues';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LONG_REQ, SHORT_REQ, SELECT_OPT } from './constants.js';


class App extends Component {
  state = {
    isLoading: false,
    isSizeSelected: false,
    searchQuery: '',
    selectValue: 'short',
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
    const dataCopy = this.state.data.concat();
    const lastSortRow = this.state.sortRow.concat();
    let sortType = '';

    if(lastSortRow !== sortRow){
      sortType = 'asc';
    }else{
      sortType = this.state.sortType ===  'asc' ? 'desc' : 'asc';
    }
    // use external func for sorting
    dataCopy.sort(compareValues(sortRow, sortType));

    this.setState({data: dataCopy, sortType: sortType, sortRow: sortRow});
  }

  handleSelectOnSubmit = (e) => {
    const { selectValue } = this.state;
    e.preventDefault();
    this.setState({isSizeSelected: true, isLoading: true});

    switch(selectValue){
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
    this.setState({selectValue: value});
  }

  showColumnData = (column) => {
    console.log(column);
  }

  // handleFilter = (query) =>{
  //   this.setState({searchQuery: query});
  // }

  render(){
    const { isSizeSelected, isLoading, selectValue, data, sortType, sortRow} = this.state;
    
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
        {isLoading ? 
          <Loader/> :
          <>
            <SearchFilter handleFilter={this.handleFilter} />
            <Table 
              data={data} 
              sortType={sortType} 
              sortRow={sortRow} 
              handleSort={this.handleSort} 
              showColumnData={this.showColumnData}
            />
          </>
        }
      </>
    );
  }
}

export default App;

