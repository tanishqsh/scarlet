import React from 'react';


class Services extends React.Component{
    render() {
        return(
            <div className={'home-wrapper'}>
                <div className={'home-container'}>
                    <div className={'home-inner-container'}>
                        <p className={'scarlet-heading-alt'}>  </p>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-sm-4'}/>
                                <div className={'col-sm-4'}>
                                    <p className={'scarlet-subheading'}>
                                        Website Development
                                    </p>
                                    <p className={'scarlet-content'}>
                                        Crafted with primary goal in mind – a beautiful balance
                                        of development, sales and brand building. Scarlet. utilises
                                        state of the art tools to provide developments
                                        that match international standards.
                                        <br/>
                                        <b>Pricing starts at INR. 45,000 one time</b>
                                    </p>
                                    <p className={'scarlet-subheading'}>
                                        Advertising
                                    </p>
                                    <p className={'scarlet-content'}>
                                        Don't sell – show them how it makes their life better.
                                        We use psychological techniques to target your ideal
                                        customers.
                                        <br/>
                                        <b>Pricing starts at INR. 10,000 per month</b>s
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

export default Services;
