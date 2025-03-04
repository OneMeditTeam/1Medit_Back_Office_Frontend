import { Button } from './Button';

const Header = () => {
  return (
    <header className="flex items-center w-full h-16 px-6 text-white bg-white shadow-md">
      <Button
        variant="outline"
        className="ml-auto text-gray-400 hover:text-black "
      >
        로그아웃
      </Button>
    </header>
  );
};
export default Header;
