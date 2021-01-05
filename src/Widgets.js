import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1333946586636849152"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Dogs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/groups/dogspotting"}
          options={{ text: "Share the dogs you see on your adventures!" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
