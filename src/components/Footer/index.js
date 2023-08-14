const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="mt-8 py-4 text-center">
      <p>&copy; {year} The New Bohemian Store </p>
    </footer>
  )
}

export default Footer
