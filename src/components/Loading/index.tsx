import { MutatingDots } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#fe5f1e"
      secondaryColor="#fe5f1e"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

