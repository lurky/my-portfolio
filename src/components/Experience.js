import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImBriefcase, ImLibrary } from "react-icons/im";



const Experience = () => {
    return (
      <a name="experience">
        <div className="bg-experience">
            <div className="container">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education front"
                  dateClassName="timeline-date front"
                  date="October 2019 - Present"
                  style={{marginTop:'5rem'}}
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<ImLibrary />}
                  iconClassName="front"
                >
                  <h3 className="vertical-timeline-element-title">B.S. Computer Information Sciences</h3>
                  <h4 className="vertical-timeline-element-subtitle">Software Developement</h4>
                  <p>
                    Graduating December 2021
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work front"
                  dateClassName="timeline-date front"
                  date="October 2020 - February 2021"
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<ImBriefcase/>}
                  iconClassName="front"
                >
                  <h3 className="vertical-timeline-element-title">Student Project Lead - ECPI University</h3>
                  <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                  <p>
                    Project Management, Storyboarding, Communication, Scheduling, Team Colaboration
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work front"
                  dateClassName="timeline-date front"
                  date="May 2020 - August 2020"
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<ImBriefcase />}
                  iconClassName="front"
                >
                  <h3 className="vertical-timeline-element-title">Jr. Developer (Reactjs) - LifeTagger</h3>
                  <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                  <p>
                    Agile SCRUM enviroment, Paired coding, Stripe API
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work front"
                  dateClassName="timeline-date front"
                  date="August 2017 - October 2019"
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<ImBriefcase />}
                  iconClassName="front"
                >
                  <h3 className="vertical-timeline-element-title">Project Estimator</h3>
                  <h4 className="vertical-timeline-element-subtitle">Charleston, SC</h4>
                  <p>
                    Client Relations, Blueprints, AutoCAD, Scheduling, Budgeting, Project Management
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work front"
                  dateClassName="timeline-date front"
                  date="February 2016 -  August 2017"
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<ImBriefcase />}
                  iconClassName="front"
                >
                  <h3 className="vertical-timeline-element-title">Electrical Assembler</h3>
                  <h4 className="vertical-timeline-element-subtitle">North Charleston, SC</h4>
                  <p>
                    Troubleshooting, Time Management, Problem Solving
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
        </div>
      </a>
    )
}
export default Experience
