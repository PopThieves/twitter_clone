import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Good Boi",
      username: "ShibaInu",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.giphy.com/avatars/mensweardog/pxfdAwdrXBJx/200h.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media.giphy.com/avatars/mensweardog/pxfdAwdrXBJx/200h.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's woofing?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image url"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
