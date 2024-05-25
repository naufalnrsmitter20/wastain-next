const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center my-10 ">
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map((step, index) => (
        <li key={step}>
          <p
            className={`flex items-center mx-20 justify-center  py-2 px-4 rounded-full
                         ${index <= current ? "bg-primary-green text-white font-semibold" : "bg-gray-200 text-gray-600 font-semibold"}
                         `}
          >
            {index + 1}
          </p>
          <p className="text-center mt-4 font-semibold">{step}</p>
        </li>
      ))}
    </ul>
  );
};
export default CheckoutSteps;
