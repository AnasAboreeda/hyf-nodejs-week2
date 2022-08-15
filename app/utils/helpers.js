export const isValid = (book) => {
  if (typeof book !== 'object') return false;
  if (typeof book.author === 'undefined') return false;
  if (typeof book.title === 'undefined') return false;
  return true;
};

const getTime = () => new Date().toISOString().replace('T', ' ').substr(0, 19);

export const loggerMiddleware = (req, res, next) => {
  console.log(`[${getTime()}] [${req.method}] ${req.url} ${JSON.stringify(req.body, null, 2)}`);
  next();
};

export const authenticateMiddleware = (req, res, next) => {
  if (req.header.clientID === 'HYF') {
    req.header.authenticated = true; // secret word
  }
  next();
};
