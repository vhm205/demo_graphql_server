const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    """
    A track is a group of modules
    """

    type Track {
        id: ID!
        title: String!
        description: String
        author: Author!
        thumbnail: String
        numberOfViews: Int
        length: Int @deprecated(reason: "Use durationInSeconds")
        modulesCount: Int
        modules: [Module!]!
        "The track's full duration, in seconds"
        durationInSeconds: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Module {
        id: ID!
        title: String!
        length: Int @deprecated(reason: "Use durationInSeconds")
        "The module's video duration, in seconds"
        durationInSeconds: Int
    }
`;

module.exports = typeDefs;