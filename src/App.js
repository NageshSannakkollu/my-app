import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginForm from "./components/LoginForm"
import HomePage from "./components/HomePage"
import ProductDetails from "./components/ProductDetails"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm/>}/>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/products/:id/" element={<ProductDetails/>}/>
    </Routes>
  </BrowserRouter>
) 

export default App