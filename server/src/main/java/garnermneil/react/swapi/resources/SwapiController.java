package garnermneil.react.swapi.resources;

import garnermneil.react.swapi.dto.Film;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/swapi")
public class SwapiController {

    @GetMapping(path = "films")
    public ResponseEntity<List<Film>> retrieveFilms() {
        return ResponseEntity.ok(dummyFilmCall());
    }

    private List<Film> dummyFilmCall() {
        return Arrays.asList(
                FilmBuilder.get().withTitle("One").withEpisodeId(1).build(),
                FilmBuilder.get().withTitle("Two").withEpisodeId(2).build()
        );
    }

    private static class FilmBuilder {
        private String title;
        private Integer episodeId;

        static FilmBuilder get() {
            return new FilmBuilder();
        }

        FilmBuilder withTitle(final String title) {
            this.title = title;
            return this;
        }

        FilmBuilder withEpisodeId(final Integer episodeId) {
            this.episodeId = episodeId;
            return this;
        }

        Film build() {
            final Film film = new Film();
            film.setTitle(title);
            film.setEpisodeId(episodeId);
            return film;
        }
    }
}
