import idGeneration from '../function/idGeneration';

const projects = [
  {
    name: 'lidia',
    alt: 'Lidia',
    img: 'lidia.webp',
    github: '',
    deploy: 'https://user.github.io/lidia/',
  },
  {
    name: 'uber',
    alt: 'Uber',
    img: 'uber.webp',
    github: '',
    deploy: 'https://user.github.io/uber/src/',
  },
].map((project) => ({ id: idGeneration(), ...project }));

export default projects;
