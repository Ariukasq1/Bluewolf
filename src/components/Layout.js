import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

class Layout extends React.Component {
  render() {
    const { children, title, description, image, url } = this.props;

    return (
      <>
        <Header title={title} description={description} image={image} url={url} />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
