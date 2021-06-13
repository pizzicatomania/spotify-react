import React from 'react';
import _ from 'lodash';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import PlayList from './PlayList';
import { Button } from 'react-bootstrap';

const SearchResult = (props) => {
    const { loadMore, result, setCategory, selectedCategory } = props;
    const { albums, artists, playlist } = result;
    return (
        <React.Fragment>
            <div className="search-buttons">
                {!_.isEmpty(albums.items) && (
                    <button
                    className={`${
                        selectedCategory === 'albums' ? 'btn active' : 'btn'
                    }`}
                    onClick={() => setCategory('albums')}
                    >
                        Albums
                    </button>
                )}
                {!_.isEmpty(artists.items) && (
                    <button
                    className={`${
                        selectedCategory === 'artists' ? 'btn active' : 'btn'
                    }`}
                    onClick={() => setCategory('artists')}
                    >
                        Artists
                    </button>

                )}
                {!_.isEmpty(playlist.items) && (
                    <button
                    className={`${
                        selectedCategory === 'playlist' ? 'btn active' : 'btn'
                    }`}
                    onClick={() => setCategory('playlist')}
                    >
                        Playlist
                    </button>
                )}
            </div>
            <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
                { albums && <AlbumsList albums={albums} />}
            </div>
            <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
                { albums && <ArtistsList artists={artists} />}
            </div>
            <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
                { albums && <PlayList playlist={playlist} />}
            </div>
            {!_.isEmpty(result[selectedCategory]) &&
             !_.isEmpty(result[selectedCategory].next) && (
                 <div className="load-mode" onClick={() => loadMore(selectedCategory)}>
                     <Button variant="info" type="button">
                         Load more
                     </Button>
                 </div>
             )}
        </React.Fragment>
    );
};
export default SearchResult;