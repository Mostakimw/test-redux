import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-purple-500"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment by 5
      </button>
      <br />
      <button className="bg-purple-500" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <div>
        <h1 className="text-red-600">{value}</h1>
      </div>
      <button className="bg-purple-500" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
