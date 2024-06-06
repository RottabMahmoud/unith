import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../store';

const fallbackImage = '/src/assets/react.svg'; // Fallback image path

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSelector((state: RootState) => state.images);
  const item = data?.find((item) => item.index === Number(id));

  if (!item) return <div>Item not found</div>;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="p-4 border border-gray-300 flex flex-col items-center">
          <img
            src={item.image || fallbackImage} // Use fallback image path if item.image is missing
            alt={item.title}
            className="w-64 h-64 object-cover"
          />
          <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
          {item.description && <p className="mt-1 text-gray-600">{item.description}</p>}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="inline-block border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
