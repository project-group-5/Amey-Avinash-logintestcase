import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe("testing App.js", () => {



  afterEach(() => {

      console.log("clean up done...")

  })



  beforeEach(() => {

      console.log("initialization done")

  })



  it("first test", () => {

      let nvar = 100

      expect(nvar).toBe(100)

  })



  it("second test", () => {

      let mytext = "Hello World"



      expect(mytext).toContain("World")

  })

})