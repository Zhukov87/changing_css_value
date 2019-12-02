import React from 'react';
import Form from './comoponents/Form';

const data = ['-', 'px', '%', 'rem', 'em', 'ex', 'pt', 'ic', 'lh', 'vh', 'vw'];

function App() {
  return (
    <div>
      <Form menuItems={data} />
    </div>
  );
}

export default App;
