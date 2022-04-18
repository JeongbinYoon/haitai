import React from 'react';
import './App.css';
import HTHeader from './HTHeader/HTHeader';
import HTMain from './HTMain/HTMain';
import HTCompany from './HTCompany/HTCompany';
import HTHoneyStory from './HTHoneyStory/HTHoneyStory';
import HTSweetNews from './HTSweetNews/HTSweetNews';
import HTLink from './HTLink/HTLink';
import HTFooter from './HTFooter/HTFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTHeader/>
      </header>
      <nav></nav>
      <section>
        <HTMain/>
        <HTCompany/>
        <HTHoneyStory/>
        <HTSweetNews/>
        <HTLink/>
      </section>
      <footer>
        <HTFooter/>
      </footer>
    </div>
  );
}

export default App;
