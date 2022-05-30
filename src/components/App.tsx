import { Provider } from "react-redux" // react component that we'll use to get access to our redux store
import { store } from "../state" // export all redux stuff
import RepositoriesList from "./RepositoriesList"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package Name</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App