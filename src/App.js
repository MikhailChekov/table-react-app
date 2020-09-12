import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Loader from './components/Loader';
import sizeSelector from './components/SizeSelector';
import SearchFilter from './components/SearchFilter';


import 'bootstrap/dist/css/bootstrap.min.css';
import SizeSelector from './components/SizeSelector';

const LONG_REQ = 'https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const SHORT_REQ = 'https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const options = [
  {
    value: 'short',
    label: 'Короткий вариант (32 значения)'
  },
  {
    value: 'long',
    label: 'Длинный вариант (1000 значений)'
  }
]


class App extends Component {
  state = {
    isLoading: false,
    isSizeSelected: false,
    searchQuery: '',
    selectValue: 'short',
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
        this.setData(data);
     }
     catch(e){
      console.log(`Error! ${e}`);
     }
  }

  setData = (result) => {
    console.log(result);
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

  

  // handleFilter = (query) =>{
  //   this.setState({searchQuery: query});
  // }

  render(){
    const { isSizeSelected, isLoading, selectValue} = this.state;
    
    if(!isSizeSelected){
      return (
        <SizeSelector 
          options={options} 
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
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>First</td>
                  <td>Last</td>
                  <td>@mEmaildo</td>
                  <td>+Phone</td>
                </tr>
              </tbody>
            </Table>
          </>
        }
      </>
    );
  }
}

export default App;
