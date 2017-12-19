import React from 'react';

export class Film extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            opening: []
        };
    }

    componentDidMount () {
        fetch("api/swapi/films/" + this.props.episodeId)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(">>> result", result);
                    this.setState({
                        isLoaded: true,
                        opening: result.opening_crawl
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render () {
        const { error, isLoaded, opening } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <span>{opening}</span>
            );
        }
    }
}