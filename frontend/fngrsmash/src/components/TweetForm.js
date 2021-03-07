import React from "react";

const TweetForm = ({newTweet}) => {

  return (
    <form>
        <input type="text" placeholder="What's on your mind?" value={newTweet}></input>
        <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetForm;