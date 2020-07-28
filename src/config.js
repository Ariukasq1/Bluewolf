const Config = lang => {
  if ('production' !== process.env.NODE_ENV) {
    return {
      apiUrl: `https://bluewolftravel.com/wp${lang ? `/${lang}` : '/en'}/wp-json`,
    };
  }

  return {
    apiUrl: `https://bluewolftravel.com/wp${lang ? `/${lang}` : '/en'}/wp-json`,
  };
}

export default Config;
