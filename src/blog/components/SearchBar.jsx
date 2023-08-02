/* 

En este ejemplo, creamos un componente `SearchBar` que recibe dos props: `posts`, que es un array de objetos que representan los posts del blog, y `setFilteredPosts`, 
que es una función que actualiza el estado de los posts filtrados.

Dentro del componente, usamos el hook `useState` para crear un estado local `searchTerm`, que representa el término de búsqueda actual. Luego, creamos una función 
`handleSearch` que se ejecuta cada vez que el usuario escribe algo en el input de búsqueda. Esta función filtra los posts según el término de búsqueda y actualiza 
el estado de los posts filtrados y el término de búsqueda.

Finalmente, renderizamos un input de tipo texto que muestra el término de búsqueda actual y se actualiza cada vez que el usuario escribe algo en el input.
Para usar este componente en tu aplicación, simplemente importa el componente `SearchBar` y pásale las props `posts` y `setFilteredPosts`:
*/

import React, { useState } from 'react';


export const SearchBar = ({ posts, setFilteredPosts }) => {


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(value)
    );
    setFilteredPosts(filteredPosts);
    setSearchTerm(value);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}
