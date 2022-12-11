import { PayWay } from "../../assets/image";

type PaymentMethodCardProps = {
  type?: "PayWay" | "ComingSoon";
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

function PaymentMethodCard({
  type = "ComingSoon",
  onClick,
}: PaymentMethodCardProps) {
  switch (type) {
    case "PayWay":
      return (
        <div
          onClick={onClick}
          className="bg-white sm:w-[25em] w-full h-20 rounded-lg cursor-pointer"
        >
          <img src={PayWay} alt="" className="h-full w-full" />
        </div>
      );
    default:
      return (
        <div
          onClick={onClick}
          className="bg-white sm:w-[25em] w-full h-20 rounded-lg cursor-pointer"
        >
          <div className="w-full h-full grid place-items-center text-3xl">
            Coming Soon
          </div>
        </div>
      );
  }
}

export default PaymentMethodCard;
