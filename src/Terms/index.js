import React from 'react';


class Terms extends React.Component{
    render() {
        return(
            <div className={'home-wrapper'}>
                <div className={'home-container'}>
                    <div className={'home-inner-container'}>
                        <p className={'scarlet-heading-alt'}> Terms </p>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-sm-4'}/>
                                <div className={'col-sm-4'}>
                                    <p className={'scarlet-subheading'}>
                                        Terms & Condition
                                    </p>
                                    <p className={'scarlet-content'}>
                                        No refunds in case of service agreements related
                                        to one time development or setting up
                                        advertising campaigns.
                                    </p>
                                    <p className={'scarlet-subheading'}>
                                        Privacy Policy
                                    </p>
                                    <p className={'scarlet-content'}>
                                       No data is stored on this website.
                                    </p>
                                </div>
                                <div className={'col-sm-4'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Terms;
