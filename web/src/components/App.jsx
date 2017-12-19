import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            films: []
        };
    };

    componentDidMount() {
        fetch("api/swapi/films")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        films: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    render() {
        const { error, isLoaded, films } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {films.map(film => (
                        <li key={film.episode_id}>
                            {film.episode_id} {film.title}
                        </li>
                    ))}
                </ul>
            );
        }
    };
}