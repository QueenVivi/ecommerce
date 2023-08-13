import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import ProductListPage from "./components/ProductListPage"
import ProductDetailsPage from "./components/ProductDetailsPage"
import Footer from "./components/Footer"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:id",
    element: <ProductDetailsPage />,
    loader: ({ params }) => params.id,
  },
])

const App = () => (
  <main>
    <RouterProvider router={router} />
    <Footer />
  </main>
)

export default App;
