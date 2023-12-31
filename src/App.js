import React, {useState} from 'react';
import './App.css';

const menuItems = [
  {
    id: 1,
    title: 'Inicio',
    url: '/inicio',
    subMenu: []
  },
  {
    id: 2,
    title: 'Productos',
    subMenu: [
      {
        id: 21,
        title: 'Producto 1',
        url: '/producto1',
        subMenu: [
          {
            id: 211,
            title: 'Subproducto A',
            url: '/producto1/subproductoA',
            subMenu: []
          },
          {
            id: 212,
            title: 'Subproducto B',
            url: '/producto1/subproductoB',
            subMenu: []
          }
        ]
      },
      {
        id: 22,
        title: 'Producto 2',
        url: '/producto2',
        subMenu: []
      }
    ]
  },
  {
    id: 3,
    title: 'Contacto',
    url: '/contacto',
    subMenu: []
  }
];

  const MenuItem = ({ item }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
  
    const handleClick = () => {
      setShowSubMenu(!showSubMenu);
    };

    return (
      <div>
        {item.url ?(
        <a href = {item.url}>{item.title}</a>
        ):(
          <div onClick={handleClick}>{item.title}</div>
        )}
        
        {showSubMenu && (
          <div style={{ marginLeft: '20px' }}>
            {item.subMenu.map(subItem => (
              <MenuItem key={subItem.id} item={subItem} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const Menu = ({ menuItems }) => {
    return (
      <div>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const App = () => {
    return (
      <div>
        <h1>Menú Multinivel</h1>
        <Menu menuItems={menuItems} />
      </div>
    );
  };


export default App;
