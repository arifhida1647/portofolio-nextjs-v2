
const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6">
          <p className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Arif Hidayat Portofolio
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
