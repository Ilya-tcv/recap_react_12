import React, { useState } from 'react';

const ExoQuatre = () => {
     const [display, setDisplay] = useState({
          class : "d-flex bg-danger w-25 p-4",
          class2 : "d-none bg-danger w-25 p-4",
          value :0
     })

     const changerPlace = () => {
          setDisplay({
               class : "d-none bg-danger w-25 p-4",
               class2 : "d-flex bg-danger w-25 p-4",
               value : display.value +1 
          })
     }

     const changerPlace2 = () => {
          setDisplay({
               class : "d-flex bg-danger w-25 p-4",
               class2 : "d-none bg-danger w-25 p-4",
               value : display.value +1 
          })
     }


	return (
		<div className='jumbotron'>
			<h3>Déplacer les éléments</h3>
			<div className='d-flex justify-content-between'>
				<div className='w-50 p-5 mx-5 bg-primary'>
					<div className={display.class}></div>
				</div>
				<div className='w-50 p-5 mx-5 bg-primary'>
					<div className={display.class2}></div>
				</div>
			</div>
               <div className='d-flex flex-column'>
                    <button onClick={display.class === "d-none bg-danger w-25 p-4" ? changerPlace2 : changerPlace} className="btn btn-warning w-25 mx-auto m-2 text-center">Changer place</button>
                    <button className="btn btn-success w-25 mx-auto m-2 text-center">Nbr de clicks :  {display.value} </button>
               </div>
		</div>
	);
};

export default ExoQuatre;
