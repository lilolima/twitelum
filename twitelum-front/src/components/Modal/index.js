import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
    render() {
        return (
            <div className={`modal ${this.props.isAberto ? 'modal--active' : ''}`} onClick={this.props.fechaModal}>
                {this.props.isAberto &&
                    <div className="modal_wrap">
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }



}

export default Modal