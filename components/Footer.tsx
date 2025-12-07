import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MediX</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              의료와 일상을 연결하는 정량화 중심 AI 기업
            </p>
            <p className="text-sm text-gray-400">
              Research × Clinical AI × Consumer AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-mint transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-mint transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/service/skincoach" className="text-gray-300 hover:text-mint transition-colors">
                  SkinCoach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-mint transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-mint transition-colors">
                  PoC 문의
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-mint transition-colors">
                  연구 협업
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

