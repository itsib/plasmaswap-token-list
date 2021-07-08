import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from './tokenlist.schema.json';
import { TokenList } from './types';

const ajv = new Ajv({
  allErrors: true,
  unicodeRegExp: false,
});
addFormats(ajv);
const validate = ajv.compile(schema);

export function validateTokenList(tokenList: TokenList): TokenList {
  if (validate(tokenList)) {
    return tokenList;
  }

  const validationErrors: string | undefined = validate.errors?.reduce<string>((memo, error) => {
    const add = `\n${error.instancePath} ${error.message ?? ''}`;
    return memo.length > 0 ? `${memo}; ${add}` : `${add}`;
  }, '');

  throw new Error(`Token list failed validation: ${validationErrors || 'Unknown Error'}`);
}
