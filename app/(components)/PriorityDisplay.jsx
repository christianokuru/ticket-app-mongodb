import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFire } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={FaFire} className="text-red-400" />
      <FontAwesomeIcon icon={FaFire} className="text-red-400" />
      <FontAwesomeIcon icon={FaFire} className="text-red-400" />
      <FontAwesomeIcon icon={FaFire} className="text-red-400" />
      <FontAwesomeIcon icon={FaFire} className="text-red-400" />
    </div>
  );
};

export default PriorityDisplay;
