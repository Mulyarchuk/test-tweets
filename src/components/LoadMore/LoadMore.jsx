import { Button } from './LoadMore.styled';

const LoadMoreBtn = ({ loadMore }) => {
  return <Button onClick={loadMore}>Load More</Button>;
};

export default LoadMoreBtn;