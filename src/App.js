import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import Table from './components/Table/Table';
import Loader from './components/Loader';
import SearchFilter from './components/SearchFilter';
import SizeSelector from './components/SizeSelector';
import UserInfo from './components/UserInfo';
import AddUserForm from './components/AddUserForm';

//sort high order function
import compareValues from './compareValues';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { LONG_REQ, SHORT_REQ, PAGE_SIZE } from './constants.js';


class App extends Component {
  state = {
    isLoading: false,
    isSizeSelected: false,
    isUserAddStart: false,
    choisedUser: null,
    searchQuery: '',
    sortType: 'disabled',
    sortRow: '',
    currentPage: 0,
    data: [],
  };
  
  async fetchData (searchQuery) {

    fetch(searchQuery, {
      headers: {
        origin : ""
      }
    })
    .then(res => res.json())
    .then(json =>  {
      const data = json;
      this.setState({data: data, isLoading: false});
    })
    .catch(rej => {
        throw new Error(`Error - ${rej}`);
    })

  }

  handleSort = (sortRow) => {
    // make copy data
    const data = this.state.data.concat();
    const lastSortRow = this.state.sortRow.concat();
    let sortType = '';
    
    // sort should start with 'asc' for new row
    if(lastSortRow !== sortRow) {
      sortType = 'asc';
    }else {
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
    this.setState({ searchQuery: value, currentPage: 0});
  }

  handleUserShow = (choisedUser) => {
    this.setState({ choisedUser });
  }

  handlePageClick = ({ selected }) => {
    this.setState({currentPage: selected});
  }
  // separate data to small arrays for paging (1 array for page)
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

    if(searchQuery){

      const filteredData = data.filter((item) => {
        let query = searchQuery.toString().toLowerCase();

        return (
         item.id.toString().includes(query) ||
         item.firstName.toLowerCase().includes(query) ||
         item.lastName.toLowerCase().includes(query) ||
         item.phone.toLowerCase().includes(query) ||
         item.email.toLowerCase().includes(query) );
        
      });

      return filteredData;
    }else{
      return data;
    }
  }

  showUserAddFormToggle = () => {
    this.setState(({isUserAddStart}) => ({isUserAddStart: !isUserAddStart}));
  }

  handleAddNewUser = (user) => {

    const data = this.state.data.concat();
    user.id = Number(user.id);
    user.description = user.description || '';
    
    if(!user.address){
      user.address = {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      }
    };
    data.unshift(user);
    this.setState({data: data, isUserAddStart: false});
  }

  render(){
    const { 
            isSizeSelected, 
            isLoading, 
            data = [], 
            sortType, 
            sortRow, 
            choisedUser,
            currentPage,
            isUserAddStart,
          } = this.state;

    
    // apply search
    const searchAppliedData = this.dataSearchFilter(data);
    
    const pageCount = Math.ceil(searchAppliedData.length / PAGE_SIZE);

    // apply paging
    const pagingAppliedData = this.dataPageFilter(searchAppliedData, PAGE_SIZE)[currentPage];

    // Show size selector if (isSizeSelected === false).
    if(!isSizeSelected){
      return (
        <SizeSelector handleSelectOnClick={this.handleSelectOnClick} />
      );
    }

    // Show add user Form if (isUserAddStart === true).
    if(isUserAddStart){
      return ( 
        <AddUserForm showUserAddFormToggle={this.showUserAddFormToggle} handleAddNewUser={this.handleAddNewUser} />
      );
    }
    // Show Table with paging and "User Info" block.
    return (
      <Container>
        <Row>
            {
              isLoading ? 
                <Col>
                  <Loader/> 
                </Col> 
              :
                <>
                  <Col lg={6} md={8} className="mb-3">
                    <SearchFilter handleSearchOnClick={this.handleSearchOnClick} />
                  </Col>
                  <Col lg={6} md={4} className="text-center mb-3">
                    <Button variant="info" onClick={ ()=> { this.showUserAddFormToggle() }}>Добавить пользователя</Button>
                  </Col>
                  <Col lg={12} md={12}>
                    <Table 
                      data={pagingAppliedData} 
                      sortType={sortType} 
                      sortRow={sortRow} 
                      handleSort={this.handleSort} 
                      handleUserShow={this.handleUserShow}
                    />
                  </Col>
                </>
            }

            {
              searchAppliedData.length > PAGE_SIZE ?
                <Col lg={12} md={12}>
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
                  />
                </Col>
               :
                null
            }
            {
              choisedUser ?
                <Col lg={12} md={12}>
                  <UserInfo choisedUser={choisedUser} /> 
                </Col> 
              : 
                null
            }
        </Row>
      </Container> 
    );
  }
}

export default App;