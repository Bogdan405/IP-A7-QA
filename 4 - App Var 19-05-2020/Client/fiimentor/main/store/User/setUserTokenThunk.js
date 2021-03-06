import {Dispatch} from 'redux';
import Swal from 'sweetalert2';
import {
    setUserTokenAction,
    setUserTokenErrorAction,
    setUserTokenSuccessAction,
} from './userActions';

export  const setUserTokenThunk = (userToken?: string)=> async(
    dispatch: Dispatch
)=>{
    try{
        dispatch(setUserTokenAction());

        if(userToken) {
            dispatch(setUserTokenSuccessAction(userToken));
            sessionStorage.setItem('userToken', userToken);
        } else{
            dispatch(setUserTokenErrorAction());
        }
    } catch(e) {
        dispatch(setUserTokenErrorAction(e));

        await Swal.fire({
            title: 'Error!',
            text: 'There was an error setting the user token!',
            type: 'error',
            confirmButtonText: 'Ok',
            icon: 'error',
        })
    }
};
