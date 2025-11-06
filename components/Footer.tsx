export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4 text-orange-500">About Hindu Digest</h3>
            <p className="text-gray-300">
              Hindu Digest is dedicated to sharing the timeless wisdom of Sanatana Dharma 
              through authentic teachings of Vedanta and Hindu philosophy by Dr. Karanam Aravinda Rao.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Dr. Karanam Aravinda Rao
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  About Hindu Digest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@hindu-digest" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-orange-500">Connect</h3>
            <p className="text-gray-300 mb-2">Hindu Digest</p>
            <p className="text-gray-300 mb-2">Email: contact@hindudigest.org</p>
            <p className="text-gray-300 mb-2">
              <a href="https://www.sanskritfromhome.org" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                SanskritFromHome.org
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <a href="https://indicatoday.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                Indica Today
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2025 Hindu Digest | Spreading the Light of Sanatana Dharma Worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
