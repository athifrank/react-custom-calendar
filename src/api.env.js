// import { showError } from './actions'

export const HOST = "/api/";  

export const fetchx = (props, path, body, queryParams, isMultipart = false) => {
  if (!props) {
    throw new Error("Invalid arg: Props is not passed");
  }

  const q = prepareQueries(queryParams);

  const url = `${HOST}${path}${q}`;
  const { token, dispatch, method } = props;
  
  const options = prepareOptions(token, body, method, isMultipart);

  return fetch(url, options).then(res => {
    return res.json();
  });
};

const prepareOptions = (token, body, method = "GET", isMultipart) => {
  let Header ;

  if(isMultipart){
    Header =  { "X-Auth-Token": token  }
  }else{
    Header = { "X-Auth-Token": token, "Content-Type": "application/json"  }
  }

  const options = {
    method,
    headers: Header
  };

  if (body && typeof body === "object") {
    const b = isMultipart ? body : JSON.stringify(body);
    options["method"] = "POST";
    options["headers"] = {
      ...options.headers,
    };
    options["body"] = b;
  }
  return options;
};

/*
 *   prepares url queries (encoded)
 */
const prepareQueries = (queryParams = {}) => {
  if (!queryParams) {
    return "";
  }

  const qp = Object.keys(queryParams);
  if (qp.length === 0) {
    return "";
  }

  const queryEnc = [];
  qp.forEach(key => {
    const v = queryParams[key];

    if (
      typeof v === "undefined" ||
      (typeof v === "string" && v.trim() === "")
    ) {
      return;
    }

    queryEnc.push(`${key}=${v}`);
  });

  return "?" + queryEnc.join("&");
};
