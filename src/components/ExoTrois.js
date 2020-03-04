import React, {useState} from 'react';

const ExoTrois = () => {
     var [user, setUser] = useState('inconnu');
     var [value, setValue] = useState('')

     const copie = (e) => {
          user = e.target.value
          setValue(user)
     }

	const changeUser = () => {
          user = value
          setUser(user)
          setValue('')
     };

	return (
		<div className='jumbotron'>
			<h3 className='text-primary mb-3'>Welcome {user}</h3>
			<input type='text' value={value} onChange={copie} />
			<button className='btn btn-warning' onClick={()=>changeUser()}>
				go
			</button>
		</div>
	);
};

export default ExoTrois;