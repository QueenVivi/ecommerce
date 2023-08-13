import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ProductListPage from "./components/ProductListPage"
import Footer from "./components/Footer"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  }
])

const App = () => (
  <main>
    <RouterProvider router={router} />
    <Footer />
  </main>
)

export default App;
