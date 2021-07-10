import React, {Component} from "react";

export class ProfileStatus extends Component<any, any> {

    state = {
        editMode: false
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
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
            </div>
            }
        </div>
    }
}