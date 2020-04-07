import React from 'react';


class Home extends React.Component{
    render() {
        return(
            <div className={'home-wrapper'}>
                <div className={'home-container'}>
                    <div className={'home-inner-container'}>
                        <p className={'scarlet-heading-alt'}> Scarlet. </p>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-sm-4'}/>
                                <div className={'col-sm-4'}>
                                    <p className={'scarlet-content'}> There is an emotion in design,
                                        where you want to resonate
                                        with the viewer. You want him
                                        to feel that first kiss, that first touch,
                                        the first day of his school, a loving
                                        memory of his grandmother,
                                        or a strong fatherly hug.
                                        You want him to feel home. </p>
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

export default Home;
