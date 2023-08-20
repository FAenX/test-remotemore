


interface Genre {
  id?: number;
  name?: string;
  picture?: string;
  type?: string;
}

interface Contributor {
  id?: number;
  name?: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  radio?: boolean;
  tracklist?: string;
  type?: string;
  role?: string;
}

interface Track {
  id?: number;
  readable?: boolean;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  duration?: number;
  rank?: number;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: number;
  preview?: string;
  md5_image?: string;
  artist?: Artist;
  album?: Album;
  type?: string;
}

interface Artist {
  id?: number;
  name?: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  nb_album?: number;
  nb_fan?: number;
  radio?: boolean;
  tracklist?: string;
  type?: string;
}

interface Album {
  id?: number;
  title?: string;
  upc?: string;
  link?: string;
  share?: string;
  cover?: string;
  cover_small?: string;
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
  md5_image?: string;
  genre_id?: number;
  genres?: { data: Genre[] };
  label?: string;
  nb_tracks?: number;
  duration?: number;
  fans?: number;
  release_date?: string;
  record_type?: string;
  available?: boolean;
  tracklist?: string;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: number;
  contributors?: Contributor[];
  artist?: Artist;
  type?: string;
  tracks?: { data: Track[] };
}



  

  interface Track {
    id?: number;
    readable?: boolean;
    title?: string;
    title_short?: string;
    title_version?: string;
    link?: string;
    duration?: number;
    rank?: number;
    explicit_lyrics?: boolean;
    explicit_content_lyrics?: number;
    explicit_content_cover?: number;
    preview?: string;
    md5_image?: string;
    contributors?: Contributor[];
    artist?: Artist;
    album?: Album;
    type?: string;
  }


  interface Res {
    data?: Track[];
    success?: boolean;
    error?: boolean;
    status?: number;
}


export type {
    Res,
    Track,
    Album
}