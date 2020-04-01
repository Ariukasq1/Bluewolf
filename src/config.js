const Config = () => {
  if ('production' !== process.env.NODE_ENV) {
    return {
      apiUrl: 'http://bluewolftravel.local/wp-json',
    };
  }

  return {
    apiUrl: 'http://bluewolftravel.nmma.co/wp/wp-json',
  };
}

export default Config;