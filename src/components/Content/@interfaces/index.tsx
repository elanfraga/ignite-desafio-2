import { IMovieProps } from '../../SideBar/@interfaces';

export interface IGenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface IContentProps {
  selectedGenre: IGenreResponseProps;
  movies: IMovieProps[];
}