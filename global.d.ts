type EnDictionary = typeof import('~/dictionaries/en.json');
type UaDictionary = typeof import('~/dictionaries/en.json');

declare interface IntlMessages extends EnDictionary, UaDictionary {}
