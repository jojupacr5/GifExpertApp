export const GifGrid = ({ category }) => {

  const getGifs = () => {

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

  }

  return (
    <>
        <h3>{ category }</h3>
        {
            gifs.map(gif =>(
                <p key={gif}>{ gif }</p>
            ))
        }
    </>
  )
}
