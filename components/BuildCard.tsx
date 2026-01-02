
import React from 'react';
import { Link } from 'react-router-dom';
import { WindowsBuild } from '../types';

interface BuildCardProps {
  build: WindowsBuild;
}

const BuildCard: React.FC<BuildCardProps> = ({ build }) => {
  return (
    <div className="v-card">
      <img src={build.imageUrl} alt={build.title} className="v-card-img" />
      <div className="v-card-content">
        <span className="v-tag">{build.tags[0] || 'Build'}</span>
        <h3 className="v-card-title">{build.title}</h3>
        <p className="v-card-desc">{build.description}</p>
        <Link to={`/build/${build.id}`} className="v-card-btn">
          Сведения
        </Link>
      </div>
    </div>
  );
};

export default BuildCard;
