import React from 'react';

import './collection-preview.styles.scss';

const Collectionpreview= ({items,title}) =>(
<div className='collectionpreview'>
    <h1 className='Title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
          items
          .filter((item,idx)=> idx<4)
          .map(items =>(
              <div key={items.id}>{items.name}</div>
          ))
      }
    </div>
</div>
);
export default Collectionpreview;