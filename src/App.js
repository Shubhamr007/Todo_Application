// import React from 'react';
// import Header from './components/Header';
// import TodoApp from './components/TodoApp';

// function App() {
//   return (
//     <div>
//        <Header />
//       <TodoApp />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TodoApp from './Routes/TodoApp';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<TodoApp />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

