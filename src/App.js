import Grid from '@mui/material/Grid';

import Yugicard from './components/Card';
import './App.css';

function App() {

  const cards = [

    {
      card_background_image: 'https://p1.hiclipart.com/preview/784/17/216/jp-ygo-series-2-devamped-blanks-blue-yu-gi-oh-card-png-clipart.jpg',
      card_type_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-MxQabegkthM%2FUxXrLHywzrI%2FAAAAAAAABx8%2Fh86nYieq9nc%2Fs1600%2FLight.png&f=1&nofb=1',
      card_main_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F6f%2Fe4%2F18%2F6fe4180bbd1b4608e5fcbcca06be917a.png&f=1&nofb=1',
      title: 'Spider-Man',
      description: 'Just a kid from Queens.'
    },

    {
      card_background_image: 'https://p1.hiclipart.com/preview/784/17/216/jp-ygo-series-2-devamped-blanks-blue-yu-gi-oh-card-png-clipart.jpg',
      card_type_image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-QUU5KSFMYig%2FUxXrJZoOOfI%2FAAAAAAAABxE%2F7p8CLfWdTXA%2Fs1600%2FDark.png&f=1&nofb=1',
      card_main_image: 'https://64.media.tumblr.com/ee8e88a9c953a2b1118d2c57e5849da7/21234063d2d36a8d-22/s640x960/7e0ff721b30114502ee782a5117c13ecc316c0b7.png',
      title: 'Harley Quinn',
      description: 'Member of the suicide squad.'
    },

    {
      card_background_image: 'https://p1.hiclipart.com/preview/784/17/216/jp-ygo-series-2-devamped-blanks-blue-yu-gi-oh-card-png-clipart.jpg',
      card_type_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-MxQabegkthM%2FUxXrLHywzrI%2FAAAAAAAABx8%2Fh86nYieq9nc%2Fs1600%2FLight.png&f=1&nofb=1',
      card_main_image: 'https://pngpress.com/wp-content/uploads/2020/08/uploads_james_bond_james_bond_PNG38.png',
      title: 'James Bond',
      description: 'MI6 agent 007.'
    }

  ];

  return (

    <Grid container spacing={2}>
      {
        cards.map((card) => {
          return <Grid item xs={4}>
            <Yugicard
              cardinfo={card}
            />
          </Grid>
        })
      }
    </Grid>
  );
}

export default App;