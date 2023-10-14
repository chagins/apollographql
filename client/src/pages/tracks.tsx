import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";

const TRACKS = gql(`
  query Query {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
