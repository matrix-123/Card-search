import React, { Component } from 'react';
import{CardList} from './components/CardList'
import {SearchBox} from './components/SearchBox'
class App extends Component {
    state = {monsters:[],
        searchField:"",
       test:[],
      

    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}))
        
    }
    
    
    render() { 

        const {monsters,searchField}=this.state;
        const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase()
        .includes(searchField.toLowerCase()))
        return ( 
            <div >
            <SearchBox className="Serach" placeholder="search monster" handleChange={e=>
            {this.setState({searchField:e.target.value})}}/>
              
          
        
        
              

                <CardList monsters={filteredMonsters} />
                
               
               
          
                </div>
         );
    }
}
 
export default App;
 
