import React from "react";

import GoalDisplay from "./GoalDisplay";
import BookSearch from "./BookSearch";
import SearchDisplay from "./SearchDisplay";

class HomeView extends React.Component {
  render() {
    return (
      <div>
        <GoalDisplay
          button="View Current Challenge"
          link="/current-challenge"
        />
        <BookSearch />
        <SearchDisplay />
      </div>
    );
  }
}

export default HomeView;
