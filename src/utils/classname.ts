function concatClassNames(...classNames: string[]) {
  return classNames.filter(Boolean).join(' ');
}

export { concatClassNames };