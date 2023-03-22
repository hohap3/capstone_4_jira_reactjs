export function authHOC(WrapComponent) {
  return function () {
    return <WrapComponent />;
  };
}
