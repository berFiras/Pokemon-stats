const Header = () => {
  return (
    <header className="p-2 shadow-md bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex items-center">
          <img
            src="src/assets/images/headerImage.svg"
            alt="header-image"
            className="w-24 h-24"
          />
          <h1 className="text-4xl font-bold ml-6">Pokemon Stats</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
