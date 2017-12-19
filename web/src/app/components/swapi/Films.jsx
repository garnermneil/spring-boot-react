import React from 'react';
import {Film} from './Film'

export class Films extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            films: []
        };
    }

    componentDidMount () {
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
            );
    }

    render () {
        const { error, isLoaded, films } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Episode</th>
                                <th>Title</th>
                                <th>Opening</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map(film => (
                                <tr key={film.episode_id}>
                                    <td>{film.episode_id}</td>
                                    <td>{film.title}</td>
                                    <td><Film episodeId={film.episode_id}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            );
        }
    }
}
