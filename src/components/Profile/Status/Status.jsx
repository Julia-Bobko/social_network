import React from "react";

class Status extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (!this.state.editMode) ?
            <div>
                <span onDoubleClick={this.activateMode}>status</span>
            </div> :
            <div>
                <input autoFocus={true} onBlur={this.deactivateMode} value="status" />
            </div>
    }
}


export default Status;