package garnermneil.react.swapi.resources;

import garnermneil.react.swapi.SwapiService;
import garnermneil.react.swapi.dto.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/swapi")
public class SwapiController {

    private SwapiService swapiService;

    @Autowired
    public SwapiController(final SwapiService swapiService) {
        this.swapiService = swapiService;
    }

    @GetMapping(path = "films")
    public ResponseEntity<List<Film>> retrieveFilms() {
        final Optional<List<Film>> result = swapiService.retrieveFilms();
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "films/{episodeId}")
    public ResponseEntity<Film> retrieveFilmByEpisodeId(@PathVariable(name = "episodeId") final Integer episodeId) {
        final Optional<Film> result = swapiService.retrieveFilmByEpisodeId(episodeId);
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
