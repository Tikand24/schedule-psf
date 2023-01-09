import { ReactElement } from 'react';

const Navbar = ():ReactElement => (
  <nav
    className={`px-16 py-8 relative`}
  >
    <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
      <h2 className="font-extrabold text-[24px] leading-[30px]">
        Programaciones
      </h2>
    </div>
  </nav>
);

export default Navbar;
