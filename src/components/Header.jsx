import pigLogo from "../assets/pig_icon.png";

export default function Header() {
  return (
    <>
      <header className="flex w-full justify-between bg-money-green">
        <div className="flex items-center justify-between p-4">
          <img
            src={pigLogo}
            className="h-8"
            alt="a pig - logo of smart spend"
          />

          <h2 className="font-semibold text-2xl text-dark-green">
            Smart Spend
          </h2>
          <h2 className="text-1xl text-bright-white">Personal Budgeting App</h2>
        </div>

        <div>
          <h2 className="block py-2 px-3 text-bright-white bg-money-green rounded">
            Login
          </h2>

          <h2 className="block py-2 px-3 text-bright-white bg-money-green rounded">
            Sign Up
          </h2>
        </div>
      </header>
    </>
  );
}
