import React, { useState } from 'react';

const ExoSept = () => {
     const [input, setInput] = useState('')

	return (
		<div className='jumbotron container-fluid'>
			<div className='bg-danger p-3' style={{borderRadius: 10}}>
				<h1 className='text-center mb-4'>To Do List</h1>
				<div className='row'>
					<div className='col-9'>
						<input
                                   placeholder='Ajoutez une tâche'
                                   value={input}
							className='p-2'
							type='text'
						/>
						<button className='btn btn-success p-2'>Ajouter</button>
						<p className='text-warning pl-3'>
							Veuillez remplir le champ
						</p>
					</div>
					<div className='col-3'>
						<button className='btn btn-dark ml-1'>A faire</button>
						<button className='btn btn-dark ml-1'>Fini</button>
						<button className='btn btn-dark ml-1'>Tout</button>
					</div>
				</div>
			</div>

			<div className='mt-5'>
				<ul>Ici se créent les li</ul>
			</div>
		</div>
	);
};

export default ExoSept;
