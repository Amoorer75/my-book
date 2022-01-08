import "./App.css";
import Header from "./Components/Header";
import Book from "./Components/Book";
import Footer from "./Components/Footer";
import book1 from "./images/book-1.jpeg";
import book2 from "./images/book-2.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="A Thousand Splendid Suns"
        img={book1}
        desc="Lorem ipsum dolor sit amet, duo oblique quaeque ex. Per sonet luptatum lobortis eu. Nam no dolores inimicus posidonium. Sed ne partem euismod periculis. Sed cu unum illud.
Eum aperiri dignissim ex, in graece pericula conclusionemque quo, has ad malis nominavi. Ea modo oblique adipisci eam. Populo erroribus et mel, possit timeam dissentias vis et. Ut legendos percipitur ius. Ut ferri conceptam pri.
"
      />
      <Book
        title="The Kite Runner"
        img={book2}
        desc="Lorem ipsum dolor sit amet, duo oblique quaeque ex. Per sonet luptatum lobortis eu. Nam no dolores inimicus posidonium. Sed ne partem euismod periculis. Sed cu unum illud 
Eum aperiri dignissim ex, in graece pericula conclusionemque quo, has ad malis nominavi. Ea modo oblique adipisci eam. Populo erroribus et mel, possit timeam dissentias vis et. Ut legendos percipitur ius. Ut ferri conceptam pri.
"
      />
      <Footer />
    </div>
  );
}

export default App;