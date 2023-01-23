import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
