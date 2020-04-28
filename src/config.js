const Config = lang => {
  if ('production' !== process.env.NODE_ENV) {
    return {
      apiUrl: `http://bluewolftravel.nmma.co/wp${lang ? `/${lang}` : '/en'}/wp-json`,
    };
  }

  return {
    apiUrl: `http://bluewolftravel.nmma.co/wp${lang ? `/${lang}` : '/en'}/wp-json`,
  };
}

export default Config;