import { useState } from 'react';

export const Avatar = ({ user }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="avatar__container-img">
      <img
        src={user.avatar}
        alt="Avatar"
        className="avatar__img"
        onClick={handleAvatarClick}
      />
      {showOptions && (
        <div className="avatar__options">
          <button>Editar perfil</button>
          <button>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}
