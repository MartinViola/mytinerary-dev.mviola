import React from "react";
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';

// Para probar de identificar a usuario conectado o no


function Container(props) {

	function handleOnClick() {
		props.userLogOut(props.user.userEmail)
        console.log(props)
	}

    // useEffect(()=>{
    //     console.log(props)
    // },[props])

	return (
		<>
			{props.user ? <><h1>Usuario conectado {props.user.userFirstname} desde {props.user.from[0]}</h1>
				<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
					<button onClick={handleOnClick} className="btn btn-primary btn-block" style={{ maxWidth: 400 }}> Log Out  </button>
				</div>
			</>
				: <h1>No hay usuario conectado</h1>}


		</>
	)

}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	userLogOut: userActions.userLogOut,

}



export default connect(mapStateToProps, mapDispatchToProps)(Container)