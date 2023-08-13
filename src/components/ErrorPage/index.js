import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <main>
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  )
}

export default ErrorPage
