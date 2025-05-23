import Link from "next/link";

const steps = [
  { label: "Keranjang Belanja", path: "/cart" },
  { label: "Alamat Pembelian", path: "/checkout/address" },
  { label: "Pembayaran", path: "/checkout/payment" },
  { label: "Pesanan", path: "/checkout/order" },
];

const CheckoutBreadcrumb = ({ current = 0 }) => {
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto px-4">
      <nav className="flex justify-center" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <li key={index} aria-current={index === current ? "page" : undefined}>
              <div className="flex items-center">
                {/* Arrow Icon */}
                <svg 
                  className="w-3 h-3 text-gray-400 mx-1" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 6 10"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m1 9 4-4-4-4" 
                  />
                </svg>
                
                {/* Step Label */}
                {index < current ? (
                  <Link 
                    href={step.path} 
                    className="ml-1 text-lg font-medium text-green-600 hover:underline transition-colors duration-200"
                  >
                    {step.label}
                  </Link>
                ) : index === current ? (
                  <span className="ml-1 text-lg font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    {step.label}
                  </span>
                ) : (
                  <span className="ml-1 text-lg font-medium text-gray-500">
                    {step.label}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default CheckoutBreadcrumb;