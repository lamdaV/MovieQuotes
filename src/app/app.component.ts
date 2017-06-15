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
      this.movieQuotesStream.push(this.formMovieQuote)

      this.formMovieQuote = {
        movie: '',
        quote: ''
      };
    } catch (error) {
      console.log('[ ERROR ]:', error.message);
    }
  }
}
