import React from 'react';
import './App.css';

import { getPosts } from './api';
import Grid from '@mui/material/Unstable_Grid2';
import ForumBox from './forum-box';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
dayjs().format()
dayjs.extend(timezone);

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      console.log(await getPosts())
      setPosts(await getPosts());
    })();
  }, []);

  return (
    <div>
      <Grid container spacing={2} className="box">
        <Grid xs={12} md={2} />
        <Grid xs={12} md={8}>
          <h1>MAQE Forum</h1>
          <p>Your current timezone is: {dayjs.tz.guess()}</p>
          {posts.map((post, idx) => (<ForumBox post={post} idx={idx} />))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
