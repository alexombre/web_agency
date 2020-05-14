import about from './about.json';
import home from './home.json';
import works from './works.json';
import studycase from './studycase.json';

const en = {
    ...about, ...home, ...works, ...studycase, //On concatène tous nos objets JSON en un seul
};

export default en;
