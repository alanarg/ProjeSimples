// import $ from 'jquery';
import axios from 'axios';

const api = axios.create({ baseURL: `https://cors-anywhere.herokuapp.com/http://www.umr-lops.fr/naarc/api/v1/?get=list&of=area`});

export default api;



