function Nav() {

  return (
    <nav className="border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-1">
      <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../src/assets/logo.png" className="h-8" alt="GitHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FullTime Force Challenge</span>
        </a>
      <div className=''>
        <ul className='flex gap-5'>
          <li><button className=''>Docs</button></li>
          <li><button>About Me</button></li>
          <li><button>GitHub Files</button></li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
