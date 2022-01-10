import ApplicationLogo from "./ApplicationLogo";

export default function Footer() {
    return (
        <footer className="mt-12 border-t py-8">
        <div className="container">
          <div className="text-center pt-8 -mb-4">
            <ApplicationLogo />
          </div>
          <div className="flex justify-center py-8">
            <div className="max-w-lg w-full text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus id officia doloribus quidem maiores deleniti veritatis non quos, pariatur voluptatem unde neque doloremque ea recusandae, deserunt, nesciunt repudiandae obcaecati! Ab.
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-4 text-center border-t border-gray-300">
          <div className="container">
            &copy; Copyright 2022
          </div>
        </div>
      </footer>
    )
}