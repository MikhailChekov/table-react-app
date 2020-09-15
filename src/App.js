import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import Table from './components/Table/Table';
import Loader from './components/Loader';
import SearchFilter from './components/SearchFilter';
import SizeSelector from './components/SizeSelector';
import UserInfo from './components/UserInfo';

//sort high order function
import compareValues from './compareValues';

import 'bootstrap/dist/css/bootstrap.min.css';

import { LONG_REQ, SHORT_REQ, PAGE_SIZE } from './constants.js';


class App extends Component {
  state = {
    isLoading: false,
    isSizeSelected: false,
    choisedUser: null,
    searchQuery: '',
    sortType: 'disabled',
    sortRow: '',
    currentPage: 0,
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

  handleSelectOnClick = (value, e) => {
    this.setState({isSizeSelected: true, isLoading: true});

    switch(value){
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

  handleSearchOnClick = (value) => {
    this.setState({ searchQuery: value});
  }

  handleUserChoise = (choisedUser) => {
    this.setState({choisedUser});
  }

  handlePageClick = ({selected}) => {
    this.setState({currentPage: selected});
  }

  dataPageFilter = (data, size) => {

    const newData = data.reduce((p,c)=>{
      if(p[p.length-1].length === size){
        p.push([]);
      }
      
      p[p.length-1].push(c);
      return p;
    }, [[]]);

    return newData;
 
  }

  dataSearchFilter = (data) =>{

    const { searchQuery } = this.state;

    if(searchQuery.length > 0){

      const filteredData = data.filter((item) => {
        let query = searchQuery.toString().toLowerCase();

         return item.id.toString().includes(query) ||
        item.firstName.toLowerCase().includes(query) ||
        item.lastName.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) 
      });

      return filteredData;
    }else{
      return data;
    }
  }

  render(){
    const { 
            isSizeSelected, 
            isLoading, 
            data, 
            sortType, 
            sortRow, 
            choisedUser,
            currentPage,
          } = this.state;

    
    // apply search
    const searchAppliedData = this.dataSearchFilter(data);
    
    const pageCount = searchAppliedData.length / PAGE_SIZE;

    // apply paging
    const pagingAppliedData = this.dataPageFilter(searchAppliedData, PAGE_SIZE)[currentPage];

    
    if(!isSizeSelected){
      return (
        <SizeSelector handleSelectOnClick={this.handleSelectOnClick} />
      );
    }
    
    return (
      <>
        {
          isLoading ? 
          <Loader/> :
          <>
            <SearchFilter handleSearchOnClick={this.handleSearchOnClick} />
            <Table 
              data={pagingAppliedData} 
              sortType={sortType} 
              sortRow={sortRow} 
              handleSort={this.handleSort} 
              handleUserChoise={this.handleUserChoise}
            />
          </>
        }
        {
          searchAppliedData.length > PAGE_SIZE ?
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            forcePage={currentPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination justify-content-center'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
          /> :
          null
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

