import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji.jsx";
import { Janken } from "./pages/Janken";
import { Todo } from "./pages/Todo";
import { Api } from "./pages/API";

const App = () => {
  return (
    <BrowserRouter>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">React App</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/omikuji" class="mr-5 hover:text-gray-900">おみくじ</Link>
            <Link to="/janken" class="mr-5 hover:text-gray-900">じゃんけん</Link>
            <Link to="/todo" class="mr-5 hover:text-gray-900">TODOリスト</Link>
            <Link to="/api" class="mr-5 hover:text-gray-900">ART</Link>
          </nav>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
     <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
      // <h1 className="underline">react app</h1>
      // <div className="flex justify-center text-center">
      //   <div className="my-2">
      //     <Link to="/omikuji" className="rounded-full bg-gray-300 px-1 py-1 mx-1">おみくじ</Link>
      //     {/* linkタグの中にto URL入れたらaタグみたいな使い方できる */}
      //   </div>
      //   <div className="my-2">
      //     <Link to="/janken" className="rounded-full bg-gray-300 px-1 py-1 mx-1">じゃんけん</Link>
      //   </div>
      //   <div className="my-2">
      //     <Link to="/todo" className="rounded-full bg-gray-300 px-1 py-1 mx-1">TODOリスト</Link>
      //   </div>
      // </div>
      // <hr />
 
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

