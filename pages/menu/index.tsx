import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import * as React from 'react'

const Menu: NextPage = () => {
  const fakeData = Array(115).fill('')
  const fakeDataMenu = Array(115).fill('')
  return (
    <div className="container">
      <nav id="main-nav">
        <ul className="main_menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Services
              <Icon baseClassName="fas" className="icon_dropdown fa-sort-down" fontSize="small" />
            </a>
            <ul className="sub_menu">
              <li>
                <a href="#">Android Dev</a>
              </li>
              <li>
                <a href="#">iOS Dev</a>
              </li>
              <li>
                <a href="#">
                  Web Dev
                  <Icon baseClassName="fas" className="icon_dropdown fa-sort-down" fontSize="small" />
                </a>
                <ul className="sub_menu_2">
                  <li>
                    <a href="#">Node.js</a>
                  </li>
                  <li>
                    <a href="#">PHP</a>
                  </li>
                  <li>
                    <a href="#">Python</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
          <li>
            <a href="#">
              FAQs
              <Icon baseClassName="fas" className="icon_dropdown fa-sort-down" fontSize="small" />
            </a>
            <ul className="sub_menu">
              <li>
                <a href="#">Android</a>
              </li>
              <li>
                <a href="#">iOS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      {/* <section>
      <h1>Hi, welcome</h1>
    </section> */}
      <div className="wrapper_all">
        <div className="container_side_menu">
          <div className="wrapper_side_menu">
            {fakeData.map((item, key) => {
              return <div key={key}>{key}</div>
            })}
          </div>
        </div>
        <div className="wrapper">
          <div className="container_abc">
            {fakeDataMenu.map((item, key) => {
              return <div key={key}>{key}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
