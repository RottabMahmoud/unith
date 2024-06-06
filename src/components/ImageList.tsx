import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchImages, setActiveIndex } from '../store/imageSlice';
import { Link } from 'react-router-dom';

const fallbackImage = '/src/assets/react.svg';
const itemsPerPage = 10;
const itemsPerRow = 5;

const ImageList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, error, activeIndex } = useSelector((state: RootState) => state.images);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const paginatedData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {paginatedData?.map((item, index) => (
          <Link to={`/${item.index}/item`} key={item.index}>
            <div
              className={`p-4 border ${index === activeIndex ? 'border-red-500' : 'border-gray-300'}`}
              onClick={() => dispatch(setActiveIndex(index))}
              style={{ width: "calc(100% - 16px)" }}
            >
              <img
                src={item.image || fallbackImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              {item.description && <p className="mt-1 text-gray-600">{item.description}</p>}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-start mt-4">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePaginationClick(pageIndex + 1)}
            className={`px-2 py-1 border mx-1 ${
              currentPage === pageIndex + 1 ? 'bg-gray-300' : ''
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
