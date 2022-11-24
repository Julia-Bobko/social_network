import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.UpdateStatus(this.state.status)
    }

    onChangeStatus =(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (!this.state.editMode) ?
            <div>
                <span onDoubleClick={this.activateMode}>{this.props.status}</span>
            </div> :
            <div>
                <input className="background:black" autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivateMode} value={this.state.status} />
            </div>
    }
}


export default Status;