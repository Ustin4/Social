import React, {ChangeEvent} from 'react';

type PropsProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsProfileStatusType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
componentDidUpdate(prevProps: Readonly<PropsProfileStatusType>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }

}

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}>
                        </input>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;