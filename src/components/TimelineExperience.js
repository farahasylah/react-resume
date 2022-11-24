import React, { Component } from 'react';

class TimelineExperience extends Component{
    render(){
        const {experience} = this.props;
        return(
            <div className="timeline flex ml-0 md:ml-6 mt-5">
                <div className="relative year pt-2">
                    <p>
                        { experience.year_from }
                    </p>
                    <div className="line"></div>
                </div>
                { experience.course && 
                    <div className="animateShine relative ml-2 md:ml-6 p-2 mb-2 secondary-font w-full">
                        <p className="font-semibold text-base leading-5">
                            { experience.course }
                        </p>
                        <p className="mt-2">
                            { experience.university } - { experience.location }
                        </p>
                    </div>

                }
                { experience.position && 
                    <div className="work animateShine relative ml-2 md:ml-6 p-2 w-full">
                        <div className="job_title rounded-full px-4 mb-2 inline-block font-medium text-base">
                            { experience.position }
                        </div>
                        <ul className="job_desc list-disc ml-8 mb-2 secondary-font">
                            { experience.responsibility && experience.responsibility.map( ({ desc }) => (
                                <li key={ desc }>{ desc }</li>
                            ))}
                        </ul>
                        <p className="job_company font-semibold secondary-font">
                            { experience.company } - { experience.location }
                        </p>
                    </div>
                 }
            </div>
        )
    }
}
export default TimelineExperience;

