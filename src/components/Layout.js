import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { LanguageProvider } from '../components/LanguageContext'

class Layout extends React.Component {
  state = {
    lang: ''
  }

  onChangeLang = (lang) => {
    this.setState({
      lang
    })
  }

  render() {
    const { children, title, description, image, url } = this.props;

    const { lang } = this.state;

    return (
      <>
        <Header onChangeLang={this.onChangeLang} title={title} description={description} image={image} url={url} />
        <LanguageProvider lang={lang}>
          <main>{children}</main>
        </LanguageProvider>
        <Footer />
      </>
    );
  }
}

export default Layout;
