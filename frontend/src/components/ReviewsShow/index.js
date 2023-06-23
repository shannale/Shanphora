import { useSelector } from "react-redux";

const ReviewShow = ({productId}) => {
    const reviews = useSelector((state) => Object.values(state.reviews));

};

export default ReviewShow;