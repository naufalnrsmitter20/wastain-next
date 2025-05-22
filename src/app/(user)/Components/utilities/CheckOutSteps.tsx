import Link from "next/link";

const CheckoutBreadcrumb = ({ current = 0 }) => {
  const steps = ["Keranjang Belanja", "Alamat Pembelian", "Pembayaran", "Pesanan"];

  return (
    <div className="mt-28 w-full max-w-4xl mx-auto">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse justify-center">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-green dark:text-gray-400 dark:hover:text-white text-[20px]">
              Home
            </Link>
          </li>

          {steps.slice(0, current + 1).map((step, index) => (
            <li key={index} aria-current={index === current ? "page" : undefined}>
              <div className="flex items-center">
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className={`ms-1 text-sm font-medium text-[20px] ${index === current ? "text-primary-green font-semibold" : "text-gray-500 dark:text-gray-400"}`}>{step}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default CheckoutBreadcrumb;
