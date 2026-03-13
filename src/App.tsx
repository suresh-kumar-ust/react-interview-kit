import './App.css'
import Accordion from './components/Accordion';

function App() {

  const accordionItems = [
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet' },
  ];

  return (
    <>
      <h1>Accordion</h1>
      <p>Click and press Enter/Space to expend/collapse the Accordion</p>
      <Accordion items={accordionItems} />
    </>
  )
}

export default App
