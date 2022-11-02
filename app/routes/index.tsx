export default function Index() {
  return (
    <div className="background: #000">
      <div className="h-screen w-screen flex justify-center items-center bodyBackground">
        <div className="text-center">
          <div className="flex justify-center">
            <img src="/ice.png" />
          </div>
          <a
            className="text-white hover:text-blue-700 duration-300 text-7xl font-bold mb-4"
            href="https://ice.uy"
            target="_blank"
          >
            ice.uy
          </a>
          <p className="mt-4 text-2xl text-gray-400 font-thin">
            website under construction
            <br />
            contact <kbd>iceiceice#2401</kbd> via Discord to purchase
          </p>
        </div>
      </div>
    </div>
  );
}
