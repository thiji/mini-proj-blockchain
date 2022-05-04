import { Navbar, SellItem, ItemList } from './components'
import '@material-tailwind/react/tailwind.css'

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <SellItem />
    <ItemList />
  </div>
)

export default App
