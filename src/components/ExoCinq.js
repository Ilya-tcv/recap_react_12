import React, { useState } from 'react';

const ExoCinq = () => {
     var tab = []
     var [queen,setQueen] = useState(tab)
     var img = <img key='0' src="../img/queen.png" alt="" className="w-25 img-fluid"/>

	const addQueen = () => {
          let copie = [...tab]
          copie.push(img[0])
          setQueen(
               copie
          )
     };

	return (
		<div className='jumbotron'>
			<h3>Générer des R-E-I-N-E-S</h3>
			<button onClick={addQueen} className='mx-2 btn btn-success'>Ajouter une reine</button>
			<button className='mx-2 btn btn-warning'>
				Supprimer une reine
			</button>
			<button className='mx-2 btn btn-danger'>Supprimer tout</button>

			<div>
                    {queen}
               </div>
		</div>
     );
};

export default ExoCinq;