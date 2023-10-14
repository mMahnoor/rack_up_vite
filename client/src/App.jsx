import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from '@/components'
import routes from "@/routes";

function App() {

  return (
    <>
      <Navbar routes={routes} />
      
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes> 
    </>
  )
}

export default App
