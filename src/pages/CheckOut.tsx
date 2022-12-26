import { BackIcon } from "../assets/svg";
import { PaymentMethodCard } from "../components/card";

function CheckOut() {
  return (
    <>
      <div className="flex items-center justify-between mx-3 my-2">
        <img
          src={BackIcon}
          alt="Back"
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <div>Order Details:</div>
      </div>
      <div className="bg-secondary sm:w-[30em] w-full flex justify-between mx-auto px-5 py-3">
        <div className="h-12 flex items-center gap-3">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.4d7Emr_d4fJnEE6zK7pj_wHaFK%26pid%3DApi&f=1&ipt=cb3186191d8e9e542c4887aea3360b5a83cfc6aa3afbd4b24254091d4fa09d18&ipo=images"
            alt=""
            className="h-full bg-white aspect-square rounded-full overflow-hidden"
          />
          <p>Name</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-5">
            <div>
              <div>Quantity</div>
              <span className="block text-right">5</span>
            </div>
            <div>
              <div>Price</div>
              <span className="block text-right">30$</span>
            </div>
          </div>
          <div className="flex gap-1">
            <div>Option</div>:<span>Option Type</span>
          </div>
          <div className="flex gap-1">
            <div>Option</div>:<span>Option Type</span>
          </div>
          <div>Total : 150$</div>
        </div>
      </div>
      <div className="flex flex-col px-3 items-center sm:w-[30em] mx-auto gap-2 pb-28">
        <div className="text-xl font-bold self-start">Payment Methods:</div>
        <p className="">
          <span className="text-yellow-600">Notice</span>: About paying your
          order using payway ABA it will need to be confirmed to continue.
        </p>
        <PaymentMethodCard type="PayWay" />
        <PaymentMethodCard />
      </div>
    </>
  );
}

export default CheckOut;
