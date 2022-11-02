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
          <div className="flex justify-center items-center gap-x-2 mt-4">
            {
              [
                {
                  name: 'TikTok',
                  url: 'https://tiktok.com/@ice.uy',
                  icon: '/tiktok.webp',
                }
              ].map((social: any, index:number) => {
                return (<div key={index}>
                  <a href={social.url} target="_blank">
                    <img src={social.icon} className="h-8" style={{filter: "invert(100%)"}} />
                  </a>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
