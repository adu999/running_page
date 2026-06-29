interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: '老杜跑步',
  siteUrl: 'https://adu999.github.io/running_page',
  logo: '',
  description: '每一步都算数',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://adu999.github.io',
    },
    {
      name: 'About',
      url: 'https://github.com/adu999/running_page',
    },
  ],
};

export default data;
