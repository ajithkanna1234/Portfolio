import './App.css';
import { createContext,useState,useEffect } from 'react';
import N from './Navigation/N';
import P from './ProfileContent/P';
import D from './Displayscreen/D';
import Loading from './Loading.js/Loading';
export const AppContext = createContext(null) ;
function App() {
  const[loading,setLoading] = useState(true)
 const [ visible, setVisible ] = useState(false);
 const [ pv,setPv] = useState(false)
 const [ ev,setEv] = useState(false)

 useEffect(() => {
  // Simulate loading for 2 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

  return (
    <div className=" p-1 h-[100vh]">
      { loading ?(
        <Loading/>
      ):(
              <AppContext.Provider value={{visible,setVisible,setPv,pv,ev,setEv}}>
              <N />
              <section className='container-md App flex h-[87%] w-[100%]'>
                <P />
                <D />
              </section>
            </AppContext.Provider>
      )}
    </div>
  );
}
export default App;
