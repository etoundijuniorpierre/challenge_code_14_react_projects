import './App.scss';
import { useState } from 'react';

import Copy from './copy.svg';
import Users from './user.svg';
import Comment from './comments.svg';

import User from './api-link-file/user.js';
import Posts from './api-link-file/posts.js';
import Comments from './api-link-file/comment.js';
import Default from './api-link-file/default.js';

function App() {
  const [currentText, setCurrentText] = useState(<Default />);

  const postClick = () => {
    setCurrentText(<Posts />); 
  };

  const userClick = () => {
    setCurrentText(<User />); 
  };

  const commentClick = () => {
    setCurrentText(<Comments />); 
  };

  return (
    <>
      <h1>Testimonials</h1>

      <div className="navbtn"> 
        <ul>
          <li className="lien1" onClick={postClick}>
          <img src={Copy} alt="Copy Icon" />
             Posts
          </li>

          <li className="lien2" onClick={userClick}>
          <img src={Users} alt="User Icon" />
             Users
          </li>

          <li className="lien3" onClick={commentClick}>
          <img src={Comment} alt="Comment Icon" />
             Comments
          </li>
        </ul>
      </div>

      <div className="content-display">
        <h3>
        {currentText}
        </h3>
      </div>
    </>
  );
}

export default App;
