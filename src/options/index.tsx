import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';
import * as ServiceWorker from "./serviceWorker";
import React from 'react';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

ServiceWorker.unregister();

// const Options = () => {
//   const [color, setColor] = useState<string>("");
//   const [status, setStatus] = useState<string>("");
//   const [like, setLike] = useState<boolean>(false);

//   useEffect(() => {
//     // Restores select box and checkbox state using the preferences
//     // stored in chrome.storage.
//     chrome.storage.sync.get(
//       {
//         favoriteColor: "red",
//         likesColor: true,
//       },
//       (items) => {
//         setColor(items.favoriteColor);
//         setLike(items.likesColor);
//       }
//     );
//   }, []);

//   const saveOptions = () => {
//     // Saves options to chrome.storage.sync.
//     chrome.storage.sync.set(
//       {
//         favoriteColor: color,
//         likesColor: like,
//       },
//       () => {
//         // Update status to let user know options were saved.
//         setStatus("Options saved.");
//         const id = setTimeout(() => {
//           setStatus("");
//         }, 1000);
//         return () => clearTimeout(id);
//       }
//     );
//   };

//   return (
//     <>
//       <div>
//         Favorite color:{" "}
//         <select
//           value={color}
//           onChange={(event) => setColor(event.target.value)}
//         >
//           <option value="red">red</option>
//           <option value="green">green</option>
//           <option value="blue">blue</option>
//           <option value="yellow">yellow</option>
//         </select>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={like}
//             onChange={(event) => setLike(event.target.checked)}
//           />
//           I like colors.
//         </label>
//       </div>
//       <div>{status}</div>
//       <Button variant="contained">Hello World</Button>
//       <button onClick={saveOptions}>Save</button>
//     </>
//   );
// };