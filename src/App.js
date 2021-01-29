import React, { useEffect, useState } from 'react'
import { Navigation } from "../src/components/navigation/index"
import { Loading } from "../src/components/loading/index"
import { Fade } from "@material-ui/core"
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  return (
    <>{loading ? (
      <Loading />
      ) : (
      <Fade 
      in={!loading}
      timeout={1500}
      >
          <Navigation />
      </Fade>
      )}
    </>
  );
}

export default App;
