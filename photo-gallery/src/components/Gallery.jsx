import React, { useState, useMemo, useReducer, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducer/favouritesReducer";

function Gallery() {

  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  // useCallback for search handler
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // useMemo for filtering photos
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  const toggleFavourite = (photo) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo
    });
  };

  if (loading) {
    return <p className="text-center text-xl mt-10">Loading photos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  return (
    <div className="p-6">

      {/* Search */}
      <input
        type="text"
        placeholder="Search by author..."
        className="border p-2 mb-6 w-full rounded"
        value={search}
        onChange={handleSearch}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => {

          const isFav = state.favourites.some(
            (fav) => fav.id === photo.id
          );

          return (
            <div key={photo.id} className="border rounded-lg overflow-hidden shadow">

              <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-48 object-cover"
              />

              <div className="p-3 flex justify-between items-center">

                <p className="text-sm font-medium">{photo.author}</p>

                <button
                  onClick={() => toggleFavourite(photo)}
                  className={`text-xl ${isFav ? "text-red-500" : "text-gray-400"}`}
                >
                  {isFav ? "❤️" : "🤍"}
                </button>

              </div>

            </div>
          );

        })}

      </div>
    </div>
  );
}

export default Gallery;