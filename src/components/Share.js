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
        <h6>Share this article</h6>
        <FacebookShareButton title={title} url={path} >
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <TwitterShareButton title={title} url={path} >
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <PinterestShareButton title={title} url={path} >
          <PinterestIcon size={32} />
        </PinterestShareButton>
        <EmailShareButton title={title} url={path} >
          <EmailIcon size={32} />
        </EmailShareButton>
      </div >
    );
  }
}

export default Share;
