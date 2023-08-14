import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"
import ProductListPage from "./components/ProductListPage"
import ProductDetailsPage from "./components/ProductDetailsPage"
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
    <div className="mx-auto p-4 max-w-screen-lg">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </main>
)

export default App;
