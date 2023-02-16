import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji.jsx";
import { Janken } from "./pages/Janken";
import { Todo } from "./pages/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="underline">react app</h1>
      <div className="flex justify-center text-center">
        <div className="my-2">
          <Link to="/omikuji" className="rounded-full bg-gray-300 px-1 py-1 mx-1">おみくじ</Link>
          {/* linkタグの中にto URL入れたらaタグみたいな使い方できる */}
        </div>
        <div className="my-2">
          <Link to="/janken" className="rounded-full bg-gray-300 px-1 py-1 mx-1">じゃんけん</Link>
        </div>
        <div className="my-2">
          <Link to="/todo" className="rounded-full bg-gray-300 px-1 py-1 mx-1">TODOリスト</Link>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

