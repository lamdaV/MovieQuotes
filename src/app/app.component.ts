import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export interface MovieQuote {
  movie: string;
  quote: string;
  $key?: string;
}

const QUOTE_PATH = '/quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formMovieQuote: MovieQuote = {
    movie: '',
    quote: ''
  };

  movieQuotesStream: FirebaseListObservable<MovieQuote[]>
  constructor(db: AngularFireDatabase) {
    this.movieQuotesStream = db.list(QUOTE_PATH);
  }

  onSubmit() {
    try {
      if (this.formMovieQuote.$key) {
        const key = this.formMovieQuote.$key;
        const data = Object.assign({}, {movie: this.formMovieQuote.movie, quote: this.formMovieQuote.quote});
        this.movieQuotesStream.update(key, data);
      } else {
        this.movieQuotesStream.push(this.formMovieQuote)
      }

      this.formMovieQuote = {
        movie: '',
        quote: ''
      };
    } catch (error) {
      console.log('[ ERROR ]:', error.message);
    }
  }

  edit(movieQuote: MovieQuote) {
    this.formMovieQuote = Object.assign({}, movieQuote, {$key: movieQuote.$key});
  }

  delete(movieQuote: MovieQuote) {
    const key = movieQuote.$key
    this.movieQuotesStream.remove(key);
  }
}
