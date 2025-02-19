export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <div className="text-center p-12 bg-white bg-opacity-95 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-700">
          Currently under development. Exciting things coming soon!
        </p>
        <div className="mt-6 text-sm text-gray-500 animate-pulse">
          Stay tuned for updates...
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:vanamalashivakumar24@gmail.com"
            target="_blank"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg text-lg font-medium shadow-md transition-transform duration-300 hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/shivakumarvanamala/"
            target="_blank"
            className="px-6 py-2 bg-gray-700 text-white rounded-lg text-lg font-medium shadow-md transition-transform duration-300 hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <img
          src="/signature_logo.png"
          alt="Signature"
          className="w-48 opacity-80"
        />
        {/* <p className="text-gray-600 text-lg mt-2 font-signature">
          - Shiva Kumar Vanamala
        </p> */}
      </div>
    </div>
  );
}
