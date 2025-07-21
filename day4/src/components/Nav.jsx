import { link } from "react";
import { useNavigate} from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, []);

if (count > 5) {
    navigate("/shop");
}

return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
)

}