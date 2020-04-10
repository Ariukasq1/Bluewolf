const Config = lang => {
  if ('production' !== process.env.NODE_ENV) {
    return {
      apiUrl: `http://bluewolftravel.nmma.co${lang ? `/${lang}` : ''}/wp/wp-json`,
    };
  }

  return {
    apiUrl: `http://bluewolftravel.nmma.co${lang ? `/${lang}` : ''}/wp/wp-json`,
  };
}

export default Config;