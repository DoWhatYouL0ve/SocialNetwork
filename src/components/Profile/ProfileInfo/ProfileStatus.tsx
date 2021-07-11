import React, {ChangeEvent, Component} from "react";

export class ProfileStatus extends Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            status: e.target.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode }>{!this.props.status ? '------' : this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode}/>
            </div>
            }
        </div>
    }
}