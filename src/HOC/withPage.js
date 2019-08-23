import mobile from './mobile';

export default (DesktopComponent, MobileComponent) => {
  return mobile() ? MobileComponent : DesktopComponent;
};

