// pages/contact.js
export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-cyan-500 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
            
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
