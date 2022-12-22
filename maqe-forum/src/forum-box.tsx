import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import dayjs from 'dayjs';

export default function ForumBox(props: {post: any, idx: number}) {
  const { post, idx } = props;

  return (
    <div className="forum-box">
      <Paper style={{ backgroundColor: (idx % 2 ? '#ccecff' : '') }}>
        <div className="forum-header">
          <Avatar className="avatar" src={post.author.avatar_url} />
          <div>
            <span className="name">{post.author.name} </span>
            <span style={{ color: '#6f7f8e' }}>posted on {dayjs(post.created_at).format('dddd, MMMM D, YYYY, HH:mm')}</span>
          </div>
        </div>
        <hr style={{ border: `1px solid ${(idx % 2 ? '#c1dced' : '#eaeaea')}` }}/>
        <div className="forum-body is-mobile">
          <img style={{ width: '250px', height: '100%' }} src={post.image_url} />
          <div style={{ width: '100%', paddingLeft: '15px' }}>
            <h3>{post.title}</h3>
            <div>
              {post.body}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}