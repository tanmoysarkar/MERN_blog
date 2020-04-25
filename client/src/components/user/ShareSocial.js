import React, {Component} from 'react';
import { Container } from "reactstrap";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon,
  } from 'react-share';

class SocialShare extends Component{

    render(){
        const shareUrl = 'http://github.com';
        const title = 'GitHub';
        return (
           <Container>

                <p style={{textAlign:"right",  margin:'1rem', fontWeight:"bold"}}>Share it : 
                          
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="ml-2"
                        
                    >
                        <FacebookIcon size={28} square />
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                        url={shareUrl}
                        quote={title}
                        className="ml-2"
                        
                    >
                        <TwitterIcon size={28} square />
                    </TwitterShareButton>
                    <LinkedinShareButton
                        url={shareUrl}
                        quote={title}
                        className="ml-2"
                    >
                        <LinkedinIcon size={28} square />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                        url={shareUrl}
                        quote={title}
                        className="ml-2"
                    >
                        <WhatsappIcon size={28} square />
                    </WhatsappShareButton>
                    <EmailShareButton
                        url={shareUrl}
                        quote={title}
                        className="ml-2"
                    >
                        <EmailIcon size={28} square />
                    </EmailShareButton>
                    
                </p>
           </Container>
        )
    }
}
export default SocialShare;