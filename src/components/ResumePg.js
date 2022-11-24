import React from "react";
import profilephoto from '../images/profilephoto.png';
import TimelineExperience from "./TimelineExperience";
import SectionBox from "./SectionBox";
import NavMenu from "./NavMenu";
import { EnvelopeIcon, MapPinIcon, CheckIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons';

class ResumePg extends React.Component{
    render(){
        const { myProfile } = this.props;
        return(
            <div>
            <div id="section-profile" 
                className="bg-headerbg md:flex inline-block mb-1 p-4 md:p-8 md:space-x-6 space-y-4 md:space-y-0">
                <div className="profile inline-block md:w-1/4 w-full" >
                    <SectionBox expanded="text-center shadow-lg border-b-4 border-darkmain">
                        <img className="rounded-full border-2 border-gray-300 inline-block w-40 h-40 object-cover shadow-lg mb-2 mt-4" src={ profilephoto } alt="profilephoto"/>
                        <h1 className="font-bold text-xl text-darkmain">{ myProfile.name }</h1>
                        
                        <h2 className="text-sm">{ myProfile.title }</h2>
                        <div className="location bg-info inline-block rounded-full px-5 py-1 mt-3 mb-3 text-sm">
                            <MapPinIcon className="h-4 w-4 inline-block mr-2 mb-1" />
                            { myProfile.location }
                        </div>
                        <div className="contact-details p-4 flex justify-center">
                            <a href={ 'mailto:' + myProfile.email } >
                                <EnvelopeIcon className="h-8 w-8 p-2 bg-main text-white rounded-full inline-block mr-2 hover:scale-110 transition-all" />
                            </a>
                            { myProfile.socials && myProfile.socials.map( ({ link }) => (
                                <SocialIcon url={ link } className="mr-2 hover:scale-110 transition-all" style={{ height: 32, width: 32 }} key={ link }/>
                                
                            ))}
                    </div>
                    </SectionBox>

                </div>
                <div className="contact md:w-3/4 w-full md:p-2 rounded-xl">
                    <NavMenu myProfile = {myProfile} isMobile={ this.props.isMobile }/>
                    <SectionBox expanded="summary p-5 text-justify text-base mt-8">
                        { myProfile.summary && myProfile.summary.map( ({ desc }) => (
                            <p className="mb-2" key={ desc }>{ desc }</p>
                        ))}
                    </SectionBox>

                    <SectionBox expanded="p-5 mt-5">
                        <h3 className="mb-3 font-semibold text-base">Major attributes</h3>
                        <ul className="attributes list-disc ml-8">
                            { myProfile.attributes && myProfile.attributes.map( ({ listItem }) => (
                                <li key={ listItem }>
                                    { listItem }
                                </li>
                            )) }
                        </ul>
                    </SectionBox>
                </div>
            </div>
            <div id="section-experiences">
                <div className="inline-block md:flex p-4 pb-0 md:p-8 md:pb-0 md:space-x-6 space-y-4 md:space-y-0" >
                    <SectionBox expanded="experiences w-full md:w-3/4 p-4 md:p-6">
                        <h3 className="mb-5 font-semibold text-lg">
                            Knowledge &amp; Skills
                        </h3>
                        <ul className="skills">
                            { myProfile.skills && myProfile.skills.map( ({ skill, proficiency }) => (
                                <li className="inline-block w-1/2 px-2 md:px-5 py-1 mb-3 hover:scale-105" 
                                    key={ skill }>
                                    { skill }
                                    <div>{ proficiency }%</div>
                                    <p className="rounded-full flex overflow-hidden">
                                        <span className="h-2 bg-rose-700" style={{ width: proficiency+ "%"}}></span>
                                    </p>
                                </li>
                            )) }
                        </ul>
                        <ul className="knowledge p-2 md:px-5 md:py-2">
                            { myProfile.knowledge && myProfile.knowledge.map( ({ skill }) => (
                                <li className="inline-block bg-info px-3 py-1 mr-4 mb-3 rounded-full transition-all hover:scale-105" key={ skill }>
                                    <CheckIcon className="inline-block w-4 mr-1"/>
                                    { skill }
                                </li>
                            )) }
                        </ul>
                    </SectionBox>
                    <SectionBox expanded="w-full md:w-1/4 p-4 md:p-6">
                        <h3 className="mb-5 font-semibold text-lg">
                            Tools & Software
                        </h3>
                        <ul className="tools">
                            { myProfile.tools && myProfile.tools.map( ({ name }) => (
                                <li className="inline-block bg-info px-3 py-1 mr-4 mb-3 rounded-full transition-all hover:scale-105" key={ name }>
                                    { name }
                                </li>
                            )) }
                        </ul>
                    </SectionBox>
                </div>
                <div className="inline-block md:flex p-4 md:p-8 md:space-x-6 space-y-4">
                    <SectionBox expanded="experiences w-full md:w-3/5 p-4 md:p-6 bg-white">
                        <h3 className="font-semibold text-lg">
                            Work Experiences
                        </h3>
                        { myProfile.experiences && myProfile.experiences.map( (experience) => (
                            <TimelineExperience experience = { experience } key={experience.year_from}/>
                        ))}
                    </SectionBox>
                    <SectionBox expanded="education w-full md:w-2/5 p-4 md:p-6">
                        <h3 className="mb-3 font-semibold text-lg">
                            Education
                        </h3>
                        { myProfile.education && myProfile.education.map( (education) => (
                            <TimelineExperience experience = { education } key={education.year_from} />
                        ))}
                    </SectionBox>
                </div>
            </div>
            </div>
        )
    }
}

export default ResumePg;