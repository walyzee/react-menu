import React from 'react'


const NavMenu = (props) =>
  <ul className="nav-menu">
    {props.listOfItems.map ((el, i) => (
      (el.children) ? (
        <li key={i} className='dd-nav-item'>
          <a style={{color: el.isActive ? '#2196ef' : 'black'}} href={el.link}>
            {el.title}
          </a>
          <ul className="dd-content"> { el.children.map((el, i)=>
            <li key={i}>
              <a
                className={'dd-item'}
                style={{color: el.isActive ? '#2196ef' : 'black'}}
                href={el.link}
              >
                {el.title}
              </a>
            </li>)}
          </ul>
        </li> 
      ) : 
      (
        <li key={i} className={el.children ? 'dd-nav-item' : 'nav-item'}>
          <a style={{color: el.isActive ? '#2196ef' : 'black'}} href={el.link}>
            {el.title}
          </a>
        </li>
      )
    ))}
  </ul>


export default NavMenu