import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";

const TicketCard = () => {
  return (
    <div className="border border-gray-300">
      <DeleteBlock />
      <PriorityDisplay />
    </div>
  );
};

export default TicketCard;
