import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountryCard from "./components/CountryCard";
import "./app.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <div className="countries-container">
          <CountryCard />
        </div>
      </main>
    </>
  );
}
// const API =
//   "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";
export default App;
