const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`)
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
}

module.exports = TrackAPI;