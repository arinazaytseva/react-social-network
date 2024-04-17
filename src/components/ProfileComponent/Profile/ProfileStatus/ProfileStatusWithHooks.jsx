import React, { useState, useEffect } from 'react';
import classes from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    let deactivateEditMode = () => {
        setEditMode(false);
        props.setStatus(status);
    };

    let activateEditMode = () => {
        setEditMode(true);
    };

    let statusText = React.createRef();
    let onStatusChange = () => { setStatus(statusText.current.value) };

    return (
        <div>
            {
                editMode
                ? <div onBlur={ () => {deactivateEditMode()} } className={classes.statusInputContainer}>
                    <input 
                        ref={statusText} autoFocus={true} 
                        className={classes.statusInput} type="text" 
                        value={status} onChange={() => {onStatusChange()}} /></div>
                : <div 
                    onDoubleClick={ () => {activateEditMode()}} 
                    className={classes.status}>{status || 'Нет статуса'}</div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;