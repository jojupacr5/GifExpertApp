import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {
  
  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  test('should do match with the snapshot', () => {

    const {container} = render( <GifItem title={title} url={url} /> );
    expect(container).toMatchSnapshot()
  })

  test('should show an image with the url and alt indicated', () => {
    
    render( <GifItem title={title} url={url} /> );
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })
  
  test('should show the title in the component', () => {
    
    render( <GifItem title={title} url={url} /> );
    expect(screen.getByText(title)).toBeTruthy();
  })
  
})
