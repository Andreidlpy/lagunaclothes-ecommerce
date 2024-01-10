import { ProductClient } from "./_components/client";

const OrdersPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient />
      </div>
    </div>
  );
};

export default OrdersPage;
