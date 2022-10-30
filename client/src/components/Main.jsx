import { Component } from "react";
import TextSection from "./TextSection";
import {FaFacebook, FaGoogle, FaInstagram, FaInternetExplorer} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {IoChatboxEllipsesOutline} from "react-icons/io5"
import {SiGooglemybusiness} from "react-icons/si"

import "./../style/main.css";

export default class Main extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            currentAction: -1,
            actions: [
                {
                    icon: <FaInternetExplorer />,
                    name: "Name",
                    desc: "Once the name is finalized, the domain needs to be bought immediately. It would be preferrable to buy a .com or a .ca TLD."
                },
                {
                    icon: <CgWebsite />,
                    name: "Web Portal",
                    desc: "The web portal would be developed using WordPress and a custom theme would be created to ensure speed and the least clutter possible. Since WordPress comes default with a solid website administration portal, it would allow us to keep the web portal future-proof. <br />A possible case would be if the website owner decides to encorporate Online Payments to their website."
                },
                {
                    icon: <FaGoogle />,
                    name: "Google Analytics",
                    desc: "From Day-One, GA would be enabled on the website and as the time passes, this would allow the website owner to analyze the best course of action for any future alterations to SEO or social media marketing."
                },
                {
                    icon: <IoChatboxEllipsesOutline />,
                    name: "Chatbot",
                    desc: "A chatbox would be installed on the website to help generate prospective leads. This bot would be connected to the owner's mobile device and would allow them the option to chat with the client who is browsing the website. Alternatively, it would ask the client to enter a few details and add them to the list of network which the owner can access any time."
                },
                {
                    icon: <FaFacebook />,
                    name: "Facebook",
                    desc: "One of the initial marketing platform should be Facebook, due to a higher presence of the target demographic."
                },
                {
                    icon: <FaInstagram />,
                    name: "Instagram",
                    desc: "Similar to Facebook, it appears the desired target demographic uses Instagram more than other platforms."
                },
                {
                    icon: <SiGooglemybusiness />,
                    name: "Google Business",
                    desc: "This would allow us to create and promote the business profile on Google Maps and Search."
                }
            ]
        }
    }

    setAction(n) {
        this.setState({
            ...this.state,
            currentAction: (this.state.currentAction == n) ? -1 : n
        })
    }

    render() {

        let actions = this.state.actions.map((el, index) => {
            return (
                <li key={index} className={(index == this.state.currentAction) ? "expanded" : ""} onClick={() => this.setAction(index)}>
                    <i className="text-8xl mb-5">{el.icon}</i>
                    <p className="uppercase font-mono text-xl">{el.name}</p>
                    <span dangerouslySetInnerHTML={{
                        __html: el.desc
                    }} />
                </li>
            );
        })

        return (
            <div className="bg-blue-100 px-5">
                <div className="container bg-white mx-auto p-5">
                    <TextSection
                        title={"Brand Identity"}
                        description={"The brand identity would need to be worked on from scratch"}
                    />
                    <TextSection
                        title={"Problem"}
                        description={"The main problem at hand is to identify prospective leads from a bucket of clients that would be interested in acquiring services from the website owner. A certain target demographic is to be focused on to achieve the best result."}
                    />
                    <TextSection
                        title={"Solution"}
                        description={"A easy-to-use web portal, along with strong SEO would allow us to reach the target audience most effectively. The website need to have certain aspects discussed in the latter sections which would help in lead engagement."}
                    />
                    <hr className="mb-4" />
                    
                    <TextSection
                        title={"Demographic"}
                        description={"The target demographic for research and analysis has been set right between where today's Millenials and Gen X are, at around 29-50 years of age."}
                    >
                        <div className="relative pb-5">
                            <div className="bg-gray-300 h-3 rounded-full relative my-5">
                                <div className="absolute bg-blue-400 rounded-lg h-6 w-6 left-2/4 top-0 bottom-0 my-auto"></div>
                            </div>
                            <p className="absolute left-0 bottom-5 text-xs font-bold uppercase text-gray-500">Gen Z</p>
                            <p className="absolute left-1/4 bottom-5 text-xs font-bold uppercase text-gray-500">Millenials</p>
                            <p className="absolute right-1/3 bottom-5 text-xs font-bold uppercase text-gray-500">Gen X</p>
                            <p className="absolute right-0 bottom-5 text-xs font-bold uppercase text-gray-500">Baby Boomers</p>
                        </div>
                    </TextSection>
                    <hr className="mb-4" />
                    <TextSection
                        title={"Resources"}
                        description={"A few handy resources for research on advertising platforms to use based on age range. Lucky for us, other people have already researched on the best platforms, a few are listed below:"}>
                            <ul className="list-decimal pl-4">
                                <li><a className="font-semibold transition-all hover:text-blue-400" href="https://sproutsocial.com/insights/new-social-media-demographics/">Sproutsocial</a></li>
                                <li><a className="font-semibold transition-all hover:text-blue-400" href="https://blog.hubspot.com/marketing/state-of-social-media-demographics">Hubspot</a></li>
                                <li><a className="font-semibold transition-all hover:text-blue-400" href="https://feedalpha.com/all-in-one-guide-on-demographics-of-social-media-platforms/">Feedalpha</a></li>
                            </ul>
                    </TextSection>
                    <TextSection title={"Reference"} description={"The primary point of reference for the web portal, so far, has been drpimplepopper (Sandra Lee) and her social media / internet presence."}>
                        <a className="font-semibold transition-all hover:text-blue-400" href="https://linkin.bio/ig-drpimplepopper/">DrPimplePopper</a>
                    </TextSection>
                    <hr className="mb-4" />
                    <TextSection
                        title={"Internet Presence"}
                        description={""}
                    >
                        <p>The priliminary step at increasing the web presence would be generation of Social Media pages (once the name has been finalized). So far, the best course of action would be to focus on the Meta platforms for advertising, i.e. <strong className="text-blue-500">Facebook</strong> and <strong className="text-pink-400">Instagram</strong>. TikTok is a strong candidate but the research has shown the major demographic on TikTok is GenZ and younger.</p>
                        <p>A prospective list of actions for the solution includes:</p>
                        <ul className="tab-list">
                            {actions}
                        </ul>
                    </TextSection>

                    <TextSection title={"Cost"}>
                        <div className="grid grid-cols-2">
                            <div className="p-3 border">Website Creation <small>(Theme Development, Chatbot Integration, Mailer Setup etc.)</small></div>
                            <div className="p-3 border">$-</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-3 border">Initial SEO and Marketing <small>(excl. platform specific cost and fees)</small></div>
                            <div className="p-3 border">$-</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-3 border">Graphic Design</div>
                            <div className="p-3 border">$-</div>
                        </div>
                    </TextSection>

                    <TextSection title={"Time Estimate"}>
                        <div className="grid grid-cols-1">
                            <div className="p-3 border">About 4 - 6 weeks</div>
                        </div>
                    </TextSection>
                    
                </div>
            </div>
        );
    }
}