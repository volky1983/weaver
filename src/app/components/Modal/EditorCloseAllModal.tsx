/*---------------------------------------------------------------------------------------------
 *  Copyright (c) IBAX All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import Modal from './';

class EditorCloseAllModal extends Modal<void, void> {
    render() {
        return (
            <div>
                <Modal.Header>
                    <FormattedMessage id="modal.confirm.title" defaultMessage="Confirmation" />
                </Modal.Header>
                <Modal.Body>
                    <FormattedMessage
                        id="editor.close.all.confirm"
                        defaultMessage="Do you really want to close all tabs without saving?"
                    />
                </Modal.Body>
                <Modal.Footer className="text-right">
                    <Button type="button" bsStyle="link" onClick={() => this.props.onCancel()}>
                        <FormattedMessage id="cancel" defaultMessage="Cancel" />
                    </Button>
                    <Button bsStyle="primary" onClick={() => this.props.onResult(null)}>
                        <FormattedMessage id="confirm" defaultMessage="Confirm" />
                    </Button>
                </Modal.Footer>
            </div>
        );
    }
}
export default EditorCloseAllModal;