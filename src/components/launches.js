import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./launchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    const wrapper = {
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    };

    return (
      <div style={wrapper}>
        <h2>Launches</h2>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);

            return data.launches.map(launch => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
