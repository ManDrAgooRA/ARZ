import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Favorite } from 'grommet-icons';

export const AddToFavorite: FC<{ id: number | string }> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    if (isFavorite) {
      setColor('#7D4CDB');
    } else {
      setColor('transparent');
    }
  }, [isFavorite]);

  const FavoriteFilled = styled(Favorite)`
    path[fill='none'] {
      fill: ${color};
      stroke: 'red';
    }
  `;

  const addToFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      type="button"
      className="btn btn-product-favorite"
      onClick={addToFavorite}
    >
      <FavoriteFilled color="brand" />
    </button>
  );
};
