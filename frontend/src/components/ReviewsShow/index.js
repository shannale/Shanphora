

const ReviewShow = ({review}) => {
    return (
        <>
        <div>
            {review.title}
        </div>
        <div>
            {review.rating}
        </div>
        <div>
            {review.comment}
        </div>
        </>
    )
};

export default ReviewShow;