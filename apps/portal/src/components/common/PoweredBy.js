import React from 'react';
import AppContext from '../../AppContext';
import {ReactComponent as GhostLogo} from '../../images/ghost-logo-small.svg';

export default class PoweredBy extends React.Component {
    static contextType = AppContext;

    render() {
        /* eslint-disable i18next/no-literal-string */
        return (
            <a href='https://cybertes.com' target='_blank' rel='noopener noreferrer' onClick={() => {
                window.open('https://cybertes.com', '_blank');
            }}>
                <GhostLogo />
                Builded by Ne0 & Ghost with ❤ 
            </a>
        );
        /* eslint-enable i18next/no-literal-string */
    }
}
