import React, {useState} from 'react';

const ExoUn = () => {
	const [titre, setTitre] = useState('Le Titre');

	const changeTitle = () => {
		setTitre('Titre modifié');
	};

	return (
		<div className='jumbotron text-center'>
			<h3 className='text-primary mb-3'>{titre}</h3>
			<button
				className='btn btn-success'
				onClick={() => {
					changeTitle();
				}}>
				Change le titre
			</button>
		</div>
	);
};

export default ExoUn;
