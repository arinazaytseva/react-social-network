import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode() {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode() {
        this.props.setStatus(this.state.status);
        this.setState({
            editMode: false
        });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        };
    };

    render() {
        console.log('render');
        let statusText = React.createRef();
        let onStatusChange = () => {
            this.setState({
                status: statusText.current.value
            });
        };

        return (
            <div>
                {
                    this.state.editMode
                    ? 
                    <div onBlur={() => {this.deactivateEditMode()}} className={classes.statusInputContainer}>
                        <input ref={statusText} autoFocus={true} className={classes.statusInput} type="text" value={this.state.status} onChange={() => {onStatusChange()}} />
                    </div>
                    : <div onDoubleClick={() => {this.activateEditMode()}} className={classes.status}>{this.state.status || 'Нет статуса'}</div>
                }
            </div>
        );
    };
};

export default ProfileStatus;