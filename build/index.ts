import fs from 'fs-extra';
import { getPackageJson } from '../src/utils/env';
import { getpath } from '../src/utils/path';
const buildInit = async () => {
  const pkgJson = await getPackageJson();
  pkgJson['bin'] = {
    'web-norm': 'index.js',
  };
  // 去掉husky
  delete pkgJson.scripts.prepare;
  pkgJson['main'] = 'index.js';
  fs.outputFileSync(getpath('./dist/package.json'), JSON.stringify(pkgJson));
};

buildInit();
