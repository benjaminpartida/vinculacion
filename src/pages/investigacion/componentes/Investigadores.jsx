import React from 'react';
import CartaInvestigador from './CartaInvestigador';

function Investigadores({ materiaActiva }) {
  if (!materiaActiva || !materiaActiva.cards) {
    return <div>No data available</div>;
  }

  return (
    <>
      {materiaActiva.cards.map((card, index) => (
        <CartaInvestigador
          key={index}
          image={card.image}
          name={card.name}
          works={card.works}
          pages={card.pages}
        />
      ))}
    </>
  );
}

export default Investigadores;
