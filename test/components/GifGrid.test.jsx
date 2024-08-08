import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch'

  test('should show the loading initially', () => {

    useFetchGifs.mockReturnValue({
      images:[], isLoading: true
    })
    
    render(<GifGrid category={category} />)
    
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });

  test('should show items when images are being loaded', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs, isLoading: true
    })
    
    render(<GifGrid category={category} />)
    expect( screen.getAllByRole('img').length ).toBe(2);
  })
  
  
})
