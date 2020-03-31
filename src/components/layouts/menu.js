import React from 'react';
import Link from "next/link";
import navbarData from "../../data/Menu/menu";
import { prefixer } from '../../utils';

function Menu(props) {
  return (
    navbarData.map(item => (
      <li key={item.id}
        className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}
      >
        <Link href={`${prefixer(item.link)}`}><a>{item.title}</a></Link>
        {(() => {
          if (item.subMenu) {
            return (
              <ul className="submenu-nav">
                {
                  item.subMenu.map((subItem, index) => {
                    return <li key={index}><Link href={`${prefixer(subItem.link)}`}><a>{subItem.title}</a></Link></li>
                  })
                }
              </ul>
            )
          }

          if (item.megaMenu) {
            return (
              <ul className="submenu-nav submenu-nav-mega">
                {
                  item.megaMenu.map((megaItem, indx) => (
                    <li key={indx} className="mega-menu-item"><Link href={megaItem.link}><a>{megaItem.title}</a></Link>
                      <ul>
                        {
                          megaItem.lists.map((listItem, idx) => {
                            return <li key={idx}><Link href={`${prefixer(listItem.link)}`}><a>{listItem.title}</a></Link></li>
                          })
                        }
                      </ul>
                    </li>
                  ))
                }
              </ul>
            )
          }
        })()}
      </li>
    ))
  )
}

export default Menu