import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import "./app.css";
import CountriesList from "./components/CountriesList";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <CountriesList />
      </main>
    </>
  );
}
// const API =
//   "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";
export default App;
