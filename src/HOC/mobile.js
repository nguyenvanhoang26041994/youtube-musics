let mobile = null;

export const registerMobile = value => {
  mobile = value;
  return mobile;
};

export default () => mobile;

try {
  window.mobile = () => mobile;
} catch (e) {

}
