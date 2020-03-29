import React from 'react';
import './App.css';
import NavMenu from './navbar'

const menuItemList = [
  {link:'#', title:'Home', isActive : true}, 
  {link:'#',  title:'Services',  isActive : false,  children : [
                                                    {link:'#1', title:'For entrepreneurs', isActive : false},
                                                    {link:'#2', title:'For students', isActive : false},
                                                    {link:'#3', title:'For hobyists', isActive : false}
                                                  ]
  }, 
  {link:'#', title:'Contact', isActive : false}
]


const App = () => <NavMenu listOfItems={menuItemList}/>

export default App;