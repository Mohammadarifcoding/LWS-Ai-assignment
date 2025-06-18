export const useGetModel = async () => {
  return async()=>{
    const url = 'https://image.pollinations.ai/models';
  const response = await fetch(url);
  const data = await response.json();
  return data;
  }
};
