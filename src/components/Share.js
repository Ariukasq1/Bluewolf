import React from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  PinterestShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon
} from "react-share";

class Share extends React.Component {
  render() {
    const { path, title = '' } = this.props;

    return (
      <div className="share-article text-center">
        <h6>SHARE THIS ARTICLE</h6>
        <FacebookShareButton title={title} url={path} >
          <FacebookIcon size={32} bgStyle={{ fill: "#e6eeff", hover: "#fff" }} iconFillColor="#0D3069" round={true} />
        </FacebookShareButton>
        <TwitterShareButton title={title} url={path} >
          <TwitterIcon size={32} bgStyle={{ fill: "#e6eeff" }} iconFillColor="#0D3069" round={true} />
        </TwitterShareButton>
        <PinterestShareButton title={title} url={path} >
          <PinterestIcon size={32} bgStyle={{ fill: "#e6eeff" }} iconFillColor="#0D3069" round={true} />
        </PinterestShareButton>
        <EmailShareButton title={title} url={path} >
          <EmailIcon size={32} bgStyle={{ fill: "#e6eeff" }} iconFillColor="#0D3069" round={true} />
        </EmailShareButton>
      </div >
    );
  }
}

export default Share;
