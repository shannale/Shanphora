import ReviewShow from "../ReviewsShow"

const ReviewIndex = (reviews) => {
    return (
        <>
            {reviews?.map((review) => (
                <ReviewShow key={review.id} review={review} />
            ))}
        </>
    )
}

export default ReviewIndex;